<script>
  import { scale, fade } from "svelte/transition";
  import { showDesktopIcon } from "$lib";
  import { allIcons } from "$lib";

  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import BoxIcon from "./BoxIcon.svelte";
  // https://picsum.photos/seed/${i}/200/300 to get random images

  let el, codem;

  let sortableSvelte = () => {
    el = document.getElementById("items");
    new Sortable(el, {
      animation: 200,
      swap: true,
      filter: ".zz",
    });
  };
  let isMounted = false;
  onMount(() => {
    isMounted = true;
    for (let i = 4; i < 160; i++) {
      allIcons.update((u) => {
        u.push({
          id: u.length + 1,
          name: "zz",
          iconImg: ``,
          swapClass: "",
          content: "",
        });
        return u;
      });
    }
    sortableSvelte();
  });
  $: {
    if ($showDesktopIcon && isMounted) {
      setTimeout(() => {
        sortableSvelte();
      }, 100);
    }
  }
</script>

{#if $showDesktopIcon}
  <div class="flex gap-3 flex-wrap" id="items" in:fade>
    {#each $allIcons as code (code.id)}
      <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>
        <BoxIcon {...code} />
      </div>
    {/each}
  </div>
{/if}
