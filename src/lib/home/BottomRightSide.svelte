<script>
	import RecentNotification from './Features/RecentNotification.svelte';
  import {
    BatteryMedium,
    ChevronUp,
    MessageSquare,
    WifiIcon,
  } from "lucide-svelte";
  import ToggleMode from "./ToggleMode.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import BatteryPercentage from "./Features/BatteryPercentage.svelte";
</script>

<div class="flex items-center gap-x-1 px-5">
  <div class="">
    <Button variant="ghost" size="icon"
      ><ChevronUp size="19" strokeWidth="1.6" /></Button
    >
  </div>
  <div>
    <BatteryPercentage />
  </div>
  <div>
    <Button variant="ghost" size="icon">
      <WifiIcon size="19" strokeWidth="1.6" class="-rotate-45" />
    </Button>
  </div>
  <div>
  <RecentNotification/>
  </div>
  <div>
    <ToggleMode />
  </div>
</div>
