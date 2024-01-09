<script>
  import BoxIcon from "./BoxIcon.svelte";
  import NetflixIcon from "$lib/images/netflixIcon.svg";
  import NotionIcon from "$lib/images/notion.svg";
  import Chrome from "$lib/images/chrome.svg";

  let allIcons = [
    {
      id: 1,
      name: "Netflix",
      iconImg: NetflixIcon,
      swapClass: "highliht",
    },
    {
      id: 2,
      name: "notion",
      iconImg: NotionIcon,
      swapClass: "highliht",
    },
    {
      id: 3,
      name: "Chrome",
      iconImg: Chrome,
      swapClass: "highliht",
    },
  ];
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import Sortable from "sortablejs";

  let el;
  onMount(() => {
    for (let i = 5; i < 120; i++) {
      allIcons.push({
        id: i,
        name: "mint",
        iconImg: Chrome,
        swapClass: "highlight",
      });
      allIcons = [...allIcons];
    }
    el = document.getElementById("items");
    // Sortable.mount(new Swap());
    new Sortable.create(el, {
      animation: 300,
      swap: true,
    });
  });
</script>

<div class="flex gap-3 flex-wrap" id="items">
  {#each allIcons as code (code.id)}
    <div animate:flip={{ delay: 250, duration: 250, easing: quintOut }}>
      <BoxIcon {...code} />
    </div>
  {/each}
</div>
