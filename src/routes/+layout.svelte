<script lang="ts">
  import { bgs } from "$lib";
  import { scale } from "svelte/transition";
  import { bg_image } from "$lib";
  import LayoutContextmenu from "./../lib/home/Features/LayoutContextmenu.svelte";
  import ApplicationsIcons from "$lib/home/ApplicationsIcons.svelte";
  import BottomNav from "$lib/home/BottomNav.svelte";
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
  import OpenFullScreen from "$lib/home/Features/OpenFullScreen.svelte";
</script>

{#if $bg_image !== 0}
  {#key $bg_image}
    <div
      in:scale
      class="fixed top-0 w-screen h-screen -z-40"
      style=" background-image: url({bgs[$bg_image].img});
background-size: cover;
background-repeat: no-repeat;
background-position: center;"
    ></div>
  {/key}
{/if}
<div class="">
  <LayoutContextmenu>
    <OpenFullScreen />
    <ModeWatcher />
    <ApplicationsIcons />
    <slot />
  </LayoutContextmenu>
  <BottomNav />
</div>
