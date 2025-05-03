<template>
  <div class="tooltip" :title="text">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  text: String,
});
</script>

<style scoped>
.tooltip {
  cursor: help;
}
</style>
