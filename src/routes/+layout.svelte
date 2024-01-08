<script lang="ts">
  import BottomNav from "$lib/home/BottomNav.svelte";
  import "../app.pcss";
  import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<slot />
<BottomNav />
