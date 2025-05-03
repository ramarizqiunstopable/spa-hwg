<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="query"
      @input="onSearch"
      placeholder="Search image title or description..."
    />
    <ul v-if="suggestions.length" class="suggestions">
      <li
        v-for="item in suggestions"
        :key="item.id"
        @click="selectSuggestion(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ImageData } from "../types/ImageData";

const props = defineProps<{
  images: ImageData[];
}>();

const emit = defineEmits<{
  (e: "filtered", result: ImageData[]): void;
}>();

const query = ref("");
const suggestions = ref<ImageData[]>([]);

const onSearch = () => {
  const q = query.value.toLowerCase();
  const filteredResults = props.images.filter(
    (img) =>
      img.title.toLowerCase().includes(q) ||
      img.description.toLowerCase().includes(q)
  );
  suggestions.value = filteredResults;
  emit("filtered", filteredResults); // Emit filtered results to parent
};

const selectSuggestion = (img: ImageData) => {
  query.value = img.title;
  suggestions.value = [];
  emit("filtered", [img]); // Emit single image when a suggestion is selected
};
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: auto;
  border-radius: 50px; /* Rounded corners */
  overflow: hidden; /* Hide overflow to keep rounded corners */
  box-sizing: border-box; /* Ensure padding does not affect width */
  padding: 0 15px; /* Add padding to prevent input from touching edges */
}

input {
  width: 100%;
  padding: 12px 20px; /* Padding untuk memberi ruang di dalam input */
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 50px; /* Rounded corners untuk input */
  box-sizing: border-box; /* Supaya padding tidak mempengaruhi ukuran input */
}

input:focus {
  outline: none;
  border-color: #4a90e2; /* Ganti warna border saat fokus */
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5); /* Efek fokus */
}

.suggestions {
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 10;
  border-radius: 0 0 10px 10px; /* Rounded bottom corners */
}

.suggestions li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.suggestions li:hover {
  background-color: #f0f0f0;
}

@media (max-width: 600px) {
  .search-bar {
    max-width: 100%;
    padding: 0 10px; /* Add padding on smaller screens */
    margin: 0 10px; /* Ensure no horizontal margin */
  }
  input {
    font-size: 0.9rem; /* Slightly smaller font size on mobile */
    padding: 10px 15px;
  }
}
</style>
