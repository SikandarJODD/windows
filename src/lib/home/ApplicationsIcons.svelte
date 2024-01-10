<script>
  import NetflixIcon from "$lib/images/netflixIcon.svg";
  import { allIcons } from "$lib";

  let realApp = 3;
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import Sortable from "sortablejs";
  import BoxIcon from "./BoxIcon.svelte";

  let el;
  onMount(() => {
    // for (let i = 4; i < 160; i++) {
    //   allIcons.push({
    //     id: i,
    //     name: "mint",
    //     iconImg: Chrome,
    //     swapClass: "highlight",
    //   });
    //   allIcons = [...allIcons];
    // }
    el = document.getElementById("items");
    new Sortable.create(el, {
      animation: 250,
      swap: true,
      filter: ".mint",
    });
  });
</script>

<div class="flex gap-3 flex-wrap" id="items">
  {#each $allIcons as code (code.id)}
    <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>
      <BoxIcon {...code} />
    </div>
  {/each}
</div>
