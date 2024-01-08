<script lang="ts">
  import ApplicationsIcons from "$lib/home/ApplicationsIcons.svelte";
  import BottomNav from "$lib/home/BottomNav.svelte";
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<ApplicationsIcons />
<slot />
<BottomNav />
