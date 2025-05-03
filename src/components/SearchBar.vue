<template>
  <div class="search-bar">
    <div class="input-container">
      <span class="search-icon">🔍</span>
      <input
        type="text"
        v-model="query"
        @input="onSearch"
        placeholder="Search image title or description..."
      />
    </div>
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

// Mendefinisikan props komponen
const props = defineProps<{
  images: ImageData[];
}>();

// Mendefinisikan event yang akan dikirim ke parent
const emit = defineEmits<{
  (e: "filtered", images: ImageData[]): void;
}>();

const query = ref("");
const suggestions = ref<ImageData[]>([]);

// Fungsi untuk melakukan pencarian berdasarkan query
const onSearch = () => {
  const q = query.value.toLowerCase();
  suggestions.value = props.images.filter(
    (img) =>
      img.title.toLowerCase().includes(q) ||
      img.description.toLowerCase().includes(q)
  );
  emit("filtered", suggestions.value); // Emit filtered images to the parent
};

// Fungsi untuk memilih saran pencarian
const selectSuggestion = (img: ImageData) => {
  emit("filtered", [img]); // Emit hanya gambar yang dipilih
  query.value = img.title;
  suggestions.value = [];
};
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding-top: 16px;
  padding-bottom: 16px;
}

.input-container {
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 999px;
  overflow: hidden;
  background-color: white;
  transition: background-color 0.3s, border-color 0.3s;
}

input {
  width: 100%;
  padding: 12px 16px 12px 40px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 999px;
  background: transparent;
  transition: background-color 0.3s, color 0.3s;
}

.search-icon {
  position: absolute;
  left: 14px;
  font-size: 18px;
  color: #999;
  transition: color 0.3s;
}

.suggestions {
  position: absolute;
  top: 100%;
  margin-top: 1px;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  list-style: none;
  padding: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.suggestions li {
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.suggestions li:hover {
  background-color: #f0f0f0;
}

/* Dark mode adjustments */
body.dark .search-bar .input-container {
  background-color: #333;
  border-color: #555;
}

body.dark .search-bar input {
  color: #fff;
  background-color: #444;
}

body.dark .search-bar .search-icon {
  color: #bbb;
}

body.dark .suggestions {
  background: #333;
  border-color: #555;
}

body.dark .suggestions li {
  color: #fff;
}

body.dark .suggestions li:hover {
  background-color: #555;
}
</style>
