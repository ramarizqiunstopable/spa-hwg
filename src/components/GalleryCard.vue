<template>
  <div class="gallery-card" :class="{ shake: isShaking }" @click="triggerShake">
    <h3>{{ image.title }}</h3>

    <Tooltip :text="image.description">
      <ImageGalery :images="[image.image_url]" />
    </Tooltip>

    <RatingStars :rating="image.rating" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageGalery from "./image.vue";
import RatingStars from "./RatingStars.vue";
import Tooltip from "./Tooltip.vue";

// Mendefinisikan props komponen
const props = defineProps({
  image: Object,
});

const isShaking = ref(false);

// Fungsi untuk memicu efek shake
function triggerShake() {
  isShaking.value = true;
  setTimeout(() => {
    isShaking.value = false;
  }, 500); // durasi shake
}
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
</style>
