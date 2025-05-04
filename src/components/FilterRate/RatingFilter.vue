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

// Mendefinisikan event yang akan di-emit
const emit = defineEmits(["filterRating"]);
const selected = ref(0);

// Fungsi untuk mengirim nilai rating terpilih ke parent
function emitRating() {
  emit("filterRating", selected.value);
}
</script>

<style scoped src="./index.css"></style>
