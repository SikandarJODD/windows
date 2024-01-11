<script>
  export let name = "code.txt";
  export let iconImg = "";
  export let id = 1;
  export let swapClass = "";
  /*
   use:draggable={{
    axis: "both",
    bounds: "body",
  }}
  */
</script>

{#if name.length > 0 && name !== "zz"}
  <div
    class="hover:bg-gray-200/60 dark:hover:bg-gray-300/60 backdrop-blur-sm dark:hover:bg-gray-800 transition-all duration-100 w-fit p-2 rounded-md"
    id="unique-{id}"
  >
    <div class="flex flex-col items-center justify-center">
      <img src={iconImg} class="h-10 w-10 rounded-sm" alt={name} />
      <p class="text-[13px] mt-1 -mb-1.5">{name}</p>
    </div>
  </div>
{:else if name === "zz"}
  <!-- <div class="w- h-20 rounded-md {name} {swapClass}"></div> -->
  <div class="w-14 h-16 rounded-md {name} {swapClass}"></div>
{/if}
