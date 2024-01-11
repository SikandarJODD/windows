<script lang="ts">
  import { allIcons } from "$lib";
  import * as ContextMenu from "$lib/components/ui/context-menu";
  import Notepad_logo from "$lib/images/Notepad_Logo.webp";
  import NoteDailog from "$lib/home/Features/addNote/NoteDailog.svelte";

  let showDesktopIcons = true;

  let iconSize = "medium";

  let ChangeState = () => {
    isopen = true;
  };
  let isopen = false;
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
          <ContextMenu.RadioItem value="small">Small Icon</ContextMenu.RadioItem
          >
          <ContextMenu.RadioItem value="medium"
            >Medium Icon</ContextMenu.RadioItem
          >
          <ContextMenu.RadioItem value="large">Large Icon</ContextMenu.RadioItem
          >
        </ContextMenu.RadioGroup>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem bind:checked={showDesktopIcons}>
          Show Desktop Icon
        </ContextMenu.CheckboxItem>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
    <ContextMenu.Separator />
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger
        inset
        on:focusin={() => {
          isopen = false;
        }}>New</ContextMenu.SubTrigger
      >
      <ContextMenu.SubContent class="w-56">
        <ContextMenu.Item on:click={ChangeState}>
          New Text Document
          <ContextMenu.Shortcut>⌘N</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>New Folder</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu.Root>
