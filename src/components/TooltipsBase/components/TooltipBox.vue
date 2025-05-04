<template>
  <TooltipBox :text="text">
    <slot />
  </TooltipBox>
</template>

<script setup lang="ts">
import TooltipBox from "./components/TooltipBox.vue";

defineProps<{ text: string }>();
</script>

<style scoped src="./index.css"></style>
