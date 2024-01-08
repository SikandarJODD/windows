<script lang="ts">
	import LayoutContextmenu from './../lib/home/Features/LayoutContextmenu.svelte';
  import ApplicationsIcons from "$lib/home/ApplicationsIcons.svelte";
  import BottomNav from "$lib/home/BottomNav.svelte";
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
</script>

<LayoutContextmenu>
<ModeWatcher />
<ApplicationsIcons />
  <slot />
</LayoutContextmenu>
<BottomNav />
