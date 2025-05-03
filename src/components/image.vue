<template>
  <div class="imagegalery">
    <img :src="images[0]" alt="imagegalery" />
  </div>
</template>

<script setup>
defineProps({
  images: Array,
});
</script>

<style scoped>
.imagegalery {
  width: 100%;
  height: 200px; /* Atur tinggi tetap */
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  background-color: #f9f9f9;
}

.imagegalery img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ini kunci agar proporsional dan rapi */
  object-position: center;
  display: block;
}
</style>
