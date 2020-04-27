<script>
  export let duration = 1000;
  export let distance = 200;
  import { fade, fly } from "svelte/transition";
</script>

<div in:fly={{ y: distance, duration }} out:fly={{ x: distance, duration }}>
  <slot />
</div>
