<script lang="ts">
    import * as ContextMenu from "$lib/components/ui/context-menu";
  
    let showBookmarks = false;
    let showFullURLs = true;
    let showDesktopIcons = true;
  
    let value = "pedro";
    let iconSize='medium';
  </script>
  
  <ContextMenu.Root>
    <ContextMenu.Trigger
      class="h-screen pt-5 px-3   m-0 p-0"
    >
      <slot></slot>
    </ContextMenu.Trigger>
    <ContextMenu.Content class="w-64">
      <ContextMenu.Sub>
        <ContextMenu.SubTrigger inset>View</ContextMenu.SubTrigger>
        <ContextMenu.SubContent class="w-48">
          <ContextMenu.RadioGroup bind:value={iconSize}>
            <ContextMenu.RadioItem value="small">Small Icon</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="medium">Medium Icon</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="large">Large Icon</ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
          <ContextMenu.Separator />
          <ContextMenu.CheckboxItem bind:checked={showDesktopIcons}>
            Show Desktop Icon
          </ContextMenu.CheckboxItem>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>
      <ContextMenu.Item inset>
        Sort by
      </ContextMenu.Item>
      <ContextMenu.Sub>
        <ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
        <ContextMenu.SubContent class="w-48">
          <ContextMenu.Item>
            Save Page As...
            <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
          <ContextMenu.Item>Name Window...</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Developer Tools</ContextMenu.Item>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>
      
      <!--  Commented for Learning Purposes -->
      <!-- <ContextMenu.CheckboxItem bind:checked={showBookmarks}>
        Show Bookmarks Bar
        <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
      </ContextMenu.CheckboxItem>
      <ContextMenu.CheckboxItem bind:checked={showFullURLs}>
        Show Full URLs
      </ContextMenu.CheckboxItem> -->
      <ContextMenu.Separator />

      <!-- Build a New folder || text file using New  -->
      <ContextMenu.Item inset>
       New 
      </ContextMenu.Item>


      <!-- Developed by Owners name -->
      <ContextMenu.Sub>
        <ContextMenu.SubTrigger inset>About</ContextMenu.SubTrigger>
        <ContextMenu.SubContent class="w-56">
          <ContextMenu.Item>Framework :  <span class="font-semibold ml-1">
            Svelte
          </span> </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Developed By <span class="font-semibold ml-1"> Sikandar.S.Bhide</span> </ContextMenu.Item>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>
    </ContextMenu.Content>
  </ContextMenu.Root>