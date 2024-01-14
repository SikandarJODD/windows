<script lang="ts">
  import BoxIcon from "./../../BoxIcon.svelte";
  import Textarea from "./../../../components/ui/textarea/textarea.svelte";
  import { allIcons } from "$lib";
  import { bottomApps } from "$lib";
  import { Circle, Folder } from "lucide-svelte";
  import * as Dialog from "$lib/components/ui/dialog";
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  export let open = false;
  export let name = "";
  export let folder = [];
  let items;
  onMount(() => {
    items = document.getElementById("shared");
    new Sortable(items, {
      animation: 400,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      sort: true,
      swap: true,
      group: {
        name: "shared",
        pull: ["shared", "minting"],
        put: ["shared", "minting"],
      },
    });
  });
</script>

<Dialog.Root {open}>
  <Dialog.Content class="sm:max-w-[600px] p-0 pt-10 px-3 sm:min-h-[300px]">
    <div
      class=" dark:bg-gray-800 absolute flex items-center top-0 w-full overflow-hidden px-3 py-1 text-sm text-primary font-semibold"
    >
      <Folder fill="white" size="14" class="mr-1" />
      Folder
    </div>
    <div
      class="cancel flex flex-wrap h-fit w-fit gap-x-3 gap-y-1"
      id="shared"
      in:fade
    >
      {#each folder as code (code.id)}
        <BoxIcon {...code} />
      {/each}
    </div>
  </Dialog.Content>
</Dialog.Root>
