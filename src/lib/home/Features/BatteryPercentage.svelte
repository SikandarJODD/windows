<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Popover from "$lib/components/ui/popover";
  import {
    BatteryFull,
    BatteryMedium,
    BatteryWarning,
    PlugZap2,
  } from "lucide-svelte";
  import { onMount } from "svelte";
  $: userBattery = 12;
  onMount(() => {
    const battery = navigator.battery || navigator.getBattery();
    battery.then((battery) => {
      userBattery = Math.round(battery.level * 100);
    });
    console.log(navigator.onLine)
  });
</script>

<Popover.Root portal={null}>
  <Popover.Trigger asChild let:builder>
    <Button builders={[builder]} variant="ghost" size="icon">
      <BatteryMedium size="19" strokeWidth="1.6" />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-56" sideOffset={6} >
    <div class="grid gap-4" >
      <div class="space-y-2">
        <h4 class="font-medium leading-none flex items-center gap-x-2">
          {#if userBattery < 20}
            <BatteryWarning size="28" strokeWidth="1.6" />
          {:else if userBattery < 70}
            <BatteryMedium size="28" strokeWidth="1.6" />
          {:else}
            <BatteryFull size="28" strokeWidth="1.6" />
          {/if}
          {userBattery}%
        </h4>
        <div class="text-sm">
          {#if userBattery < 20}
            <div class="flex items-center gap-x-1">
              <PlugZap2 size="18" strokeWidth="1.6" />
              <span class="text-muted-foreground">Connect to power source</span>
            </div>
          {:else if userBattery < 50}
            <div class="flex items-center gap-x-1">
              <PlugZap2 size="18" strokeWidth="1.6" />
              <span class="text-muted-foreground">Battery is Medium</span>
            </div>
          {:else}
            Battery is High 🔋
          {/if}
        </div>
      </div>
    </div>
  </Popover.Content>
</Popover.Root>
