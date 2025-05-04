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
import ImageGalery from "./image.vue";
import RatingStars from "./RatingStars.vue";
import Tooltip from "./TooltipsBase/Tooltip.vue";

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

<style scoped>
.gallery-card {
  text-align: center;

  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-card:hover {
  animation: shake 0.6s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.shake {
  animation: shake 0.5s;
}
.rating-row {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  text-align: left;
  margin: 20px;
}
</style>
