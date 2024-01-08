<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import * as Popover from "$lib/components/ui/popover";
    import {
    MessageSquare,
  } from "lucide-svelte";
  </script>
  
  <Popover.Root portal={null} >
    <Popover.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size='icon'>
        <MessageSquare size="19" strokeWidth="1.6" />
    </Button>
    </Popover.Trigger>
    <Popover.Content sideOffset={6} class="w-72 ">
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Notifications</h4>
          <p class="text-sm text-muted-foreground">
            Get the latest updates on time.
          </p>
        </div>
        <div class="grid gap-2">
          No New Notification
        </div>
      </div>
    </Popover.Content>
  </Popover.Root>