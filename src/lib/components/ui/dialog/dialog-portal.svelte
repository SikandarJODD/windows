<script lang="ts">
  import { Dialog as DialogPrimitive } from "bits-ui";

  type $$Props = DialogPrimitive.PortalProps;
  import { draggable } from "@neodrag/svelte";
  let position = { x: 0, y: -550 };
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
