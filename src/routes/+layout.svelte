<script lang="ts">
  import LayoutContextmenu from "./../lib/home/Features/LayoutContextmenu.svelte";
  import ApplicationsIcons from "$lib/home/ApplicationsIcons.svelte";
  import BottomNav from "$lib/home/BottomNav.svelte";
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
  import OpenFullScreen from "$lib/home/Features/OpenFullScreen.svelte";
</script>

<div class="dark:bg-gray-950">
  <LayoutContextmenu>
    <OpenFullScreen />
    <ModeWatcher />
    <ApplicationsIcons />
    <slot />
  </LayoutContextmenu>
  <BottomNav />
</div>
