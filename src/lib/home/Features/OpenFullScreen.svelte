<script lang="ts">
  import { onMount } from "svelte";

  //   To Make Full Screen
  let open = false;
  onMount(() => {
    // open = true;
  });

  import { Button } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog";
</script>

<Dialog.Root {open}>
  <Dialog.Content class="sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title class="mb-1">Full Screen Mode</Dialog.Title>
      <Dialog.Description>
        Press <span
          class="text-primary font-mono bg-primary-foreground p-1 rounded-md"
        >
          F11
        </span>
        or
        <span
          class="text-primary font-mono bg-primary-foreground p-1 rounded-md"
          >Fn + F11</span
        > to enter full screen mode for a better experience.
      </Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Button on:click={() => (open = false)}>Continue</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
