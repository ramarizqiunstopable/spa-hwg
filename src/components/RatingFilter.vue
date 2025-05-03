<template>
  <div class="rating-filter">
    <label for="rating">Filter by Rating:</label>
    <select id="rating" v-model="selected" @change="emitRating">
      <option :value="0">All</option>
      <option :value="3">★★★+</option>
      <option :value="4">★★★★+</option>
      <option :value="5">★★★★★</option>
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

export default {
  name: "RatingFilter", // Ekspor default untuk komponen
};
</script>

<style scoped>
.rating-filter {
  margin: 2rem auto 1rem;
  text-align: center;
  padding: 0 1rem;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 50px;
}

.rating-filter label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease;
}

/* Dark mode label */
body.dark .rating-filter label {
  color: #eee;
}

select {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 20px; /* lebih rounded */
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
}

/* Dark mode untuk select */
body.dark select {
  background-color: #2a2a2a;
  color: #eee;
  border: 1px solid #555;
}
</style>
