<template>
  <div class="gallery-card">
    <h3>{{ image.title }}</h3>
    <ImageGalery :images="[image.image_url]" />
    <RatingStars :rating="image.rating" />

    <Tooltip :text="image.description" />
  </div>
</template>

<script setup>
import ImageGalery from "./image.vue";
import RatingStars from "./RatingStars.vue";
import Tooltip from "./Tooltip.vue";

defineProps({
  image: Object,
});
</script>

<style scoped>
.gallery-card {
  text-align: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  position: relative;
}
</style>
