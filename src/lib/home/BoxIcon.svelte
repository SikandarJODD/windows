<script>
  import FoldersBox from "./Features/swapFolder/FoldersBox.svelte";
  import { bottomApps } from "$lib";
  import { bg_image } from "$lib";
  import { sizeIcon } from "$lib";
  export let name = "code.txt";
  export let iconImg = "";
  export let index = 0;
  export let id = 1;
  export let swapClass = "";
  export let content = "";
  export let isopen = false;
  export let type = "notepad";
  export let folder = [];
  import { fly } from "svelte/transition";
  import OpenNotepad from "./Features/open_folder/OpenNotepad.svelte";
  let openModal = () => {
    isopen = true;
    bottomApps.update((n) => {
      n.push({
        id: id + 1,
        name: name,
        icon: iconImg,
        content: content,
        isopen: true,
        swapClass: swapClass,
      });
      return n;
    });
  };
</script>

{#if name.length > 0 && name !== "zz"}
  {#if type === "notepad"}
    {#key $sizeIcon}
      <button
        on:dblclick={openModal}
        class="outline-none cursor-pointer hover:backdrop-blur-sm transition-all duration-200 w-fit p-2 {$bg_image ===
        0
          ? 'hover:bg-gray-300/60 dark:hover:bg-gray-300/10  dark:hover:border border border-transparent dark:hover:border-slate-100/30 hover:border-slate-100/30'
          : 'rounded-none  dark:hover:border border border-transparent dark:hover:border-slate-100/30 hover:border-slate-100/30 dark:hover:bg-gray-300/30 hover:bg-gray-300/30'}"
        id="unique-{id}"
      >
        <div class="flex flex-col items-center justify-center">
          <img
            in:fly
            src={iconImg}
            class="h-{$sizeIcon} w-{$sizeIcon} rounded-sm"
            alt={name}
          />
          <p
            class="text-[13px] mt-1 -mb-1.5 {$bg_image === 0
              ? 'text-primary'
              : 'text-white'} drop-shadow-md hover:drop-shadow-xl shadow-gray-900"
          >
            {name}
          </p>
        </div>
      </button>
    {/key}
  {:else if type === "folder"}
    {#key $sizeIcon}
      <button
        on:dblclick={() => {
          console.log("double click");
          isopen = !isopen;
        }}
        class=" outline-none cursor-pointer hover:backdrop-blur-sm transition-all duration-200 w-fit p-2 {$bg_image ===
        0
          ? 'hover:bg-gray-300/60 dark:hover:bg-gray-300/10  dark:hover:border border border-transparent dark:hover:border-slate-100/30 hover:border-slate-100/30'
          : 'rounded-none  dark:hover:border border border-transparent dark:hover:border-slate-100/30 hover:border-slate-100/30 dark:hover:bg-gray-300/30 hover:bg-gray-300/30'}"
        id="unique-{id}-mint"
      >
        <div class="flex flex-col items-center justify-center">
          <img
            in:fly
            src={iconImg}
            class="h-{$sizeIcon} w-{$sizeIcon} rounded-sm"
            alt={name}
          />
          <p
            class="text-[13px] mt-1 -mb-1.5 {$bg_image === 0
              ? 'text-primary'
              : 'text-white'} drop-shadow-md hover:drop-shadow-xl shadow-gray-900"
          >
            {name}
          </p>
        </div>
      </button>
    {/key}
  {:else}
    {#key $sizeIcon}
      <div
        class="cursor-pointer hover:backdrop-blur-sm transition-all duration-200 w-fit p-2 {$bg_image ===
        0
          ? 'hover:bg-gray-300/60 dark:hover:bg-gray-300/10  dark:hover:border border border-transparent dark:hover:border-slate-100/30 hover:border-slate-100/30'
          : 'rounded-none  dark:hover:border border border-transparent dark:hover:border-slate-100/30 hover:border-slate-100/30 dark:hover:bg-gray-300/30 hover:bg-gray-300/30'}"
      >
        <div class="flex flex-col items-center justify-center">
          <img
            in:fly
            src={iconImg}
            class="h-{$sizeIcon} w-{$sizeIcon} rounded-sm"
            alt={name}
          />
          <p
            class="text-[13px] mt-1 -mb-1.5 {$bg_image === 0
              ? 'text-primary'
              : 'text-white'} drop-shadow-md hover:drop-shadow-xl shadow-gray-900"
          >
            {name}
          </p>
        </div>
      </div>
    {/key}
  {/if}
{:else if name === "zz"}
  <!-- <div class="w-14 h-16 bg-gray-800 rounded-md {name} {swapClass}"></div> -->
  <div class="w-14 h-16 rounded-md {name} {swapClass}"></div>
{/if}

{#if isopen && type === "notepad"}
  <OpenNotepad {isopen} {content} {index} />
{:else if isopen && type === "folder"}
  <FoldersBox open={isopen} {folder} />
{/if}
