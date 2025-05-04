<template>
  <div class="imagegalery">
    <img :src="images[0]" alt="imagegalery" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageGalery",
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
  },
});
</script>

<style scoped src="./index.css"></style>
