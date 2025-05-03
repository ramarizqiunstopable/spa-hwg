<template>
  <div class="carousel">
    <img :src="images[0]" alt="carousel" />
  </div>
</template>

<script setup>
defineProps({
  images: Array,
});
</script>

<style scoped>
.carousel img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
