<script>
  export let name = "code.txt";
  export let iconImg = "";
  export let iconPath = "/";
  export let iconSvgCode = "";
</script>

<div class="hover:bg-gray-300/60 backdrop-blur-sm dark:hover:bg-gray-800 transition-all duration-100 w-fit p-2 rounded-md">
  <a href={iconPath}>
    <div class="flex flex-col items-center justify-center">
      {#if iconImg == ""}
        {@html iconSvgCode}
      {:else}
        <img src={iconImg} class="h-10 w-10 rounded-sm" alt={name} />
      {/if}
      <p class="text-[13px] mt-1 -mb-1.5">{name}</p>
    </div>
  </a>
</div>
