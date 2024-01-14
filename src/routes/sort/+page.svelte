<script lang="ts">
  import { onMount } from "svelte";
  interface Folder {
    id: string;
    name: string;
    type: string;
    folder?: Folder[];
  }
  let obj: Folder[] = [
    {
      id: "1",
      name: "hello",
      type: "note",
    },
    {
      id: "2",
      name: "common",
      type: "note",
    },
    {
      id: "3",
      name: "dev",
      type: "folder",
      folder: [
        {
          id: "4",
          name: "dev_ok",
          type: "note",
        },
        {
          id: "5",
          name: "dev_fine",
          type: "note",
        },
      ],
    },
  ];
  let items;
  onMount(() => {
    items = document.getElementById("items");
    for (var i = 0; i < items.length; i++) {
      new Sortable(items[i], {
        group: {
          put: true,
          pull: true,
        },
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        sort: true,
      });
    }
  });
</script>

<div id="items">
  {#each obj as item}
    <p>{item.name}</p>
    {#if item.type === "folder"}
      {#each item?.folder as i}
        <p class="ml-1 bg-gray-800 w-fit px-2">{i.name}</p>
      {/each}
    {/if}
  {/each}
</div>
