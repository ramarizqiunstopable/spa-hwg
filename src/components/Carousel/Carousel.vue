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
import { ref, computed, onMounted, onUnmounted } from "vue";

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

// Auto slide every 5 seconds
let intervalId;
onMounted(() => {
  intervalId = setInterval(next, 5000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped src="./index.css"></style>
