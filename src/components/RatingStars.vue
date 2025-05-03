<template>
  <div class="stars">
    <span v-for="n in Math.floor(rating)" :key="n">⭐</span>
  </div>
</template>

<script setup>
defineProps({
  rating: Number,
});
</script>

<style scoped>
.stars {
  color: #ffd700;
}
</style>
