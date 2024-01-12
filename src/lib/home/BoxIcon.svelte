<script>
  import { bg_image } from "$lib";
  import { sizeIcon } from "$lib";
  export let name = "code.txt";
  export let iconImg = "";
  export let id = 1;
  export let swapClass = "";
  import { fly } from "svelte/transition";
</script>

{#if name.length > 0 && name !== "zz"}
  {#key $sizeIcon}
    <div
      class="cursor-pointer hover:backdrop-blur-sm transition-all duration-200 w-fit p-2 {$bg_image ===
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
    </div>
  {/key}
{:else if name === "zz"}
  <!-- <div class="w- h-20 rounded-md {name} {swapClass}"></div> -->
  <div class="w-14 h-16 rounded-md {name} {swapClass}"></div>
{/if}
