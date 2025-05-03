<template>
  <div class="carousel">
    <div
      class="carousel-wrapper"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        class="carousel-item"
        v-for="(img, idx) in featuredImages"
        :key="idx"
      >
        <img :src="img.image_url" :alt="img.title" />
      </div>
    </div>
    <button class="nav left" @click="prev">&#10094;</button>
    <button class="nav right" @click="next">&#10095;</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);

const featuredImages = computed(() =>
  props.images.filter((img) => img.is_featured)
);

function next() {
  if (currentIndex.value < featuredImages.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = featuredImages.value.length - 1;
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 60vh; /* Fleksibel berdasarkan tinggi viewport */
  max-height: 500px;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f3f3f3;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: none;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
}

.nav:hover {
  background: rgba(255, 255, 255, 0.9);
}

.nav.left {
  left: 10px;
}

.nav.right {
  right: 10px;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .carousel {
    height: 40vh;
  }

  .nav {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }

  .nav.left {
    left: 6px;
  }

  .nav.right {
    right: 6px;
  }
}

@media (max-width: 480px) {
  .carousel {
    height: 30vh;
  }

  .nav {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .nav.left {
    left: 4px;
  }

  .nav.right {
    right: 4px;
  }
}
</style>
