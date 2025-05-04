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

<style scoped>
.imagegalery {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  background-color: #f9f9f9;
}

.imagegalery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
