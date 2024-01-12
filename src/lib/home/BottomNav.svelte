<script>
  import { onMount } from "svelte";
  import { bottomApps } from "$lib";
  import { Search } from "lucide-svelte";
  import BottomRightSide from "./BottomRightSide.svelte";
  import { scale } from "svelte/transition";

  let iselem;
  let sortableBtmItems = (elm) => {
    new Sortable(elm, {
      animation: 200,
      swap: true,
      filter: ".zz",
    });
  };
  onMount(() => {
    iselem = document.getElementById("btm_items");
    sortableBtmItems(iselem);
  });
</script>

<div
  class="bottom_nav fixed bottom-0 w-full h-11 flex border-t border-slate-400 bg-gray-200 dark:bg-gray-900"
>
  <div
    class=" flex items-center justify-center w-12 bg-gray-100 dark:bg-gray-950/80"
  >
    <svg
      viewBox="0 0 88 88"
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      ><path
        d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z"
        fill="#00adef"
      /></svg
    >
  </div>
  <div class="w-72 items-center flex px-5 border-r border-primary/40 font-thin">
    <Search class="rotate-90 mr-1.5" size="19" strokeWidth="1.6" />
    Type here to search
  </div>
  <div
    class="w-[63%] flex px-6 items-center border-r border-primary/40"
    id="btm_items"
  >
    {#each $bottomApps.filter((n) => (n.isopen = true)) as item, index}
      <div
        in:scale={{ duration: 200 }}
        class="rounded-none {$bottomApps.length > 4 && index > 3
          ? 'bg-gray-700'
          : ''} hover:bg-gray-300/80 dark:hover:bg-gray-800 h-11 w-12 flex items-center justify-center"
      >
        <img src={item.icon} height="26" width="26" alt={item.name} />
      </div>
    {/each}
  </div>
  <BottomRightSide />
</div>
