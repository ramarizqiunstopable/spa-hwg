<template>
  <div class="gallery-card" :class="{ shake: isShaking }" @click="triggerShake">
    <Tooltip :text="image.description">
      <ImageGalery :images="[image.image_url]" />
    </Tooltip>

    <h1>{{ image.title }}</h1>
    <!-- Tambahkan wrapper flex di sini -->
    <div class="rating-row">
      <p>View Ratings</p>
      <RatingStars :rating="image.rating" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ImageGalery from "../ImageCard/image.vue";
import RatingStars from "../StarRate/RatingStars.vue";
import Tooltip from "../TooltipsBase/Tooltip.vue";

interface ImageProps {
  image: {
    title: string;
    description: string;
    image_url: string;
    rating: number;
  };
}

const props = defineProps<ImageProps>();
const image = props.image;

const isShaking = ref(false);

function triggerShake() {
  isShaking.value = true;
  setTimeout(() => {
    isShaking.value = false;
  }, 500);
}
</script>

<style scoped src="./index.css"></style>
