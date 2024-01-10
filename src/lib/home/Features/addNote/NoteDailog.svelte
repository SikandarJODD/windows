<script lang="ts">
  import Notepad_logo from "$lib/images/Notepad_Logo.webp";
  import { allIcons } from "$lib";
  import * as Dialog from "$lib/components/ui/dialog";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  export let isopen = true;
  import { draggable } from "@neodrag/svelte";
  import { onMount } from "svelte";
  let addDatatoIcons = () => {
    window.addEventListener("keydown", (e) => {
      // if key ctrl +s then add it to addicons array
      if (e.ctrlKey && e.key === "m") {
        console.log("polly is this working", isopen);
        allIcons.update((u) => {
          u.push({
            id: u.length + 1,
            name: "code",
            iconImg: Notepad_logo,
            swapClass: "",
            content: content,
          });
          return u;
        });
        isopen = false;
        console.log($allIcons);
      }
      content = "";
    });
  };
  let content = "";
  onMount(() => {
    addDatatoIcons();
  });
</script>

<Dialog.Root open={isopen}>
  <Dialog.Content class="sm:max-w-[500px] p-0 pt-6">
    <div class="cancel">
      <Textarea
        placeholder="Type your message here."
        rows="10"
        bind:value={content}
      />
    </div>
  </Dialog.Content>
</Dialog.Root>
