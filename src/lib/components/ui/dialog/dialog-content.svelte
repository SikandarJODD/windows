<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";
  import * as Dialog from ".";
  import { cn, flyAndScale } from "$lib/utils";
  import { Cross2 } from "radix-icons-svelte";
  import { Circle, Square } from "lucide-svelte";

  type $$Props = DialogPrimitive.ContentProps;

  let className: $$Props["class"] = undefined;
  export let transition: $$Props["transition"] = flyAndScale;
  export let transitionConfig: $$Props["transitionConfig"] = {
    duration: 200,
  };
  export { className as class };
</script>

<Dialog.Portal>
  <Dialog.Overlay />
  <DialogPrimitive.Content
    {transition}
    {transitionConfig}
    class={cn(
      " fixed left-[46%]  z-50 grid w-full bg-background  gap-4 border p-6 shadow-lg  md:w-full ",
      className
    )}
    {...$$restProps}
  >
    <DialogPrimitive.Close
      class="absolute right-7 z-50 top-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
    >
      <Square strokeWidth="1.5" class="h-4 w-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
    <slot />
    <DialogPrimitive.Close
      class="absolute right-1.5 top-1  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
    >
      <Cross2 class="h-4 w-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</Dialog.Portal>
