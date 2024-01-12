<script lang="ts">
  import { allIcons, bottomApps } from "$lib";
  import * as Dialog from "$lib/components/ui/dialog";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  export let isopen = true;
  export let content = "";
  export let index = 0;

  import { onMount } from "svelte";
  let addDatatoIcons = () => {
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "m" && content.length > 0) {
        allIcons.update((u) => {
          u[index].content = content;
          u[index].isopen = false;
          return u;
        });
        // isopen = false;
        bottomApps.update((n) => {
          // console.log($allIcons[index], "allIcons");
          let mint = n.filter((n) => n.name !== $allIcons[index].name);
          return mint;
        });
        content = "";
      }
    });
  };
  onMount(() => {
    addDatatoIcons();
  });
  let ischanged = () => {
    isopen = false;
    bottomApps.update((n) => {
      let mint = n.filter((n) => n.name !== $allIcons[index].name);
      return mint;
    });
    allIcons.update((u) => {
      u[index].isopen = false;
      return u;
    });
  };
</script>

<Dialog.Root open={isopen} onOutsideClick={ischanged} onOpenChange={ischanged}>
  <Dialog.Content class="sm:max-w-[500px] p-0 pt-6">
    <div class="cancel">
      <Textarea
        class="border-none outline-none focus-visible:ring-transparent"
        placeholder="Type your message here. Press Ctrl + M to save the note."
        rows="10"
        bind:value={content}
      />
    </div>
  </Dialog.Content>
</Dialog.Root>
