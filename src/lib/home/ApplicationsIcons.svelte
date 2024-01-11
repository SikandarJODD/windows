<script>
  import { allIcons, realIcons } from "$lib";

  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  // import Sortable from "sortablejs";
  // const { Swap } = Sortable;
  import MintList from "./Features/addNote/MintList.svelte";
  import BoxIcon from "./BoxIcon.svelte";
  // https://picsum.photos/seed/${i}/200/300 to get random images

  let el, codem;

  onMount(() => {
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
    el = document.getElementById("items");
    new Sortable(el, {
      animation: 200,
      swap: true,
      filter: ".zz",
    });
  });
</script>

<div class="flex gap-3 flex-wrap" id="items">
  {#each $allIcons as code (code.id)}
    <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>
      <BoxIcon {...code} />
    </div>
  {/each}
  <!-- <MintList class="codem">
    <div>List Item 1</div>
    <div>List Item 2</div>
    <div>List Item 3</div>
  </MintList> -->
</div>
