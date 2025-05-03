<template>
  <div class="rating-filter">
    <label for="rating">Filter by Rating:</label>
    <select id="rating" v-model="selected" @change="emitRating">
      <option :value="0">All</option>
      <option :value="3">3+</option>
      <option :value="4">4+</option>
      <option :value="5">5</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["filterRating"]);
const selected = ref(0);

function emitRating() {
  emit("filterRating", selected.value);
}
</script>

<style scoped>
.rating-filter {
  margin: 2rem auto 1rem;
  text-align: center;
  padding: 0 1rem;
  max-width: 100%;
  box-sizing: border-box;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
}
</style>
