<template>
  <div class="gallery-card">
    <h3>{{ image.title }}</h3>

    <Tooltip :text="image.description">
      <ImageGalery :images="[image.image_url]" />
    </Tooltip>

    <RatingStars :rating="image.rating" />
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-card:hover {
  transform: scale(1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
</style>
