<script lang="ts">
  import { bg_image } from "$lib";
  import { showDesktopIcon } from "$lib";
  import { Image } from "lucide-svelte";
  import { sizeIcon } from "$lib";
  import * as ContextMenu from "$lib/components/ui/context-menu";
  import NoteDailog from "$lib/home/Features/addNote/NoteDailog.svelte";

  let iconSize = "medium";

  let ChangeState = () => {
    isopen = true;
  };
  let isopen = false;

  let smallIcon = () => {
    sizeIcon.set(8);
  };
  let largeIcon = () => {
    sizeIcon.set(12);
  };
  let defaltIcon = () => {
    sizeIcon.set(10);
  };

  let bgIndex = "0";
  $: {
    if (bgIndex === "1") {
      bg_image.set(1);
    } else if (bgIndex === "2") {
      bg_image.set(2);
    } else if (bgIndex === "3") {
      bg_image.set(3);
    } else if (bgIndex === "0") {
      bg_image.set(0);
    }
  }
</script>

<NoteDailog {isopen} />
<ContextMenu.Root>
  <ContextMenu.Trigger class="h-screen pt-5 px-3   m-0 p-0">
    <slot />
  </ContextMenu.Trigger>
  <ContextMenu.Content class="w-56">
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger inset>View</ContextMenu.SubTrigger>
      <ContextMenu.SubContent class="w-48">
        <ContextMenu.RadioGroup bind:value={iconSize}>
          <ContextMenu.RadioItem value="small" on:click={smallIcon}
            >Small Icon</ContextMenu.RadioItem
          >
          <ContextMenu.RadioItem value="medium" on:click={defaltIcon}
            >Medium Icon</ContextMenu.RadioItem
          >
          <ContextMenu.RadioItem value="large" on:click={largeIcon}
            >Large Icon</ContextMenu.RadioItem
          >
        </ContextMenu.RadioGroup>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem bind:checked={$showDesktopIcon}>
          Show Desktop Icon
        </ContextMenu.CheckboxItem>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>

    <ContextMenu.Sub>
      <ContextMenu.SubTrigger
        inset
        on:focusin={() => {
          isopen = false;
        }}>New</ContextMenu.SubTrigger
      >
      <ContextMenu.SubContent class="w-56">
        <ContextMenu.Item on:click={ChangeState}>
          Text Document
        </ContextMenu.Item>
        <ContextMenu.Item>Folder</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Separator />
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>
        <Image size="16" class="mr-1.5" strokeWidth="1.7" />
        Change Background</ContextMenu.SubTrigger
      >
      <ContextMenu.SubContent class="w-56">
        <ContextMenu.RadioGroup bind:value={bgIndex}>
          <ContextMenu.RadioItem value="1">Simple</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="2">Lofi</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="3">Forest</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="0"
            >Remove background</ContextMenu.RadioItem
          >
        </ContextMenu.RadioGroup>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu.Root>
