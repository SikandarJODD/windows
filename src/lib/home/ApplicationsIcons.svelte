<script>
  import { fade } from "svelte/transition";
  import { showDesktopIcon } from "$lib";
  import { allIcons } from "$lib";

  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import BoxIcon from "./BoxIcon.svelte";
  // https://picsum.photos/seed/${i}/200/300 to get random images

  let el, codem;
  // Branch : folders

  let sortableSvelte = () => {
    el = document.getElementById("minting");
    new Sortable(el, {
      group: {
        put: ["minting", "shared"],
        pull: ["minting", "shared"],
        name: "minting",
      },

      swap: true,
      filter: ".zz",
      animation: 150,
      fallbackOnBody: true,
      swapThreshold: 0.65,
      sort: true,
    });
  };
  let isMounted = false;
  onMount(() => {
    isMounted = true;
    for (let i = 6; i < 160; i++) {
      allIcons.update((u) => {
        u.push({
          id: u.length + 1,
          name: "zz",
          iconImg: ``,
          swapClass: "",
          content: "",
          isopen: false,
          type: "app",
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
  <div class="flex gap-3 flex-wrap" id="minting" in:fade>
    {#each $allIcons as code, index (code.id)}
      <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>
        <BoxIcon {...code} {index} />
      </div>
    {/each}
  </div>
{/if}
