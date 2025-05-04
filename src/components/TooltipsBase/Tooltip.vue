<template>
  <div class="tooltip-container">
    <slot />
    <div class="tooltip-text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tooltip",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.tooltip-text {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px 12px;
  font-size: 0.75rem;
  border-radius: 4px;
  max-width: 90%;
  text-align: center;
  white-space: normal;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 10;
}

.tooltip-container:hover .tooltip-text {
  opacity: 1;
  pointer-events: auto;
}
</style>
