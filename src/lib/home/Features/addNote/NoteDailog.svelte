<script lang="ts">
  import Notepad_logo from "$lib/images/Notepad_Logo.webp";
  import { allIcons, realIcons } from "$lib";
  import * as Dialog from "$lib/components/ui/dialog";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  export let isopen = true;
  import { draggable } from "@neodrag/svelte";
  import { onMount } from "svelte";
  let addDatatoIcons = () => {
    window.addEventListener("keydown", (e) => {
      // if key ctrl +s then add it to addicons array
      if (e.ctrlKey && e.key === "m" && content.length > 0) {
        console.log("polly is this working", isopen);
        allIcons.update((u) => {
          // u.push({
          //   id: u.length + 1,
          //   name: `Note_${u.length + 1}`,
          //   iconImg: Notepad_logo,
          //   swapClass: "",
          //   content: content,
          // });
          u[$realIcons.length].name = `Note_${$realIcons.length + 1}`;
          u[$realIcons.length].iconImg = Notepad_logo;
          u[$realIcons.length].swapClass = "";
          u[$realIcons.length].content = content;
          return u;
        });
        isopen = false;
        console.log($allIcons);
        content = "";
      }
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
        class="border-none outline-none focus-visible:ring-transparent"
        placeholder="Type your message here. Press Ctrl + M to save the note."
        rows="10"
        bind:value={content}
      />
    </div>
  </Dialog.Content>
</Dialog.Root>
