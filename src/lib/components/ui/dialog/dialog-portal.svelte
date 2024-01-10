<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";

  type $$Props = DialogPrimitive.PortalProps;
  import { draggable } from "@neodrag/svelte";
  let position = { x: -300, y: -400 };
</script>

<DialogPrimitive.Portal {...$$restProps}>
  <div
    use:draggable={{
      cancel: ".cancel",
      position,
      onDrag: ({ offsetX, offsetY }) => {
        position = { x: offsetX, y: offsetY };
      },
    }}
  >
    <slot />
  </div>
</DialogPrimitive.Portal>
