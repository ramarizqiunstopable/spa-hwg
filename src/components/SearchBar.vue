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

const props = defineProps<{
  images: ImageData[];
}>();

const emit = defineEmits<{
  (e: "filtered", images: ImageData[]): void;
}>();

const query = ref("");
const suggestions = ref<ImageData[]>([]);

const onSearch = () => {
  const q = query.value.toLowerCase();
  suggestions.value = props.images.filter(
    (img) =>
      img.title.toLowerCase().includes(q) ||
      img.description.toLowerCase().includes(q)
  );
  emit("filtered", suggestions.value); // Emit filtered images to the parent
};

const selectSuggestion = (img: ImageData) => {
  emit("filtered", [img]); // If you want to directly select an image
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
  padding-top: 16px; /* Tambahkan jarak atas */
  padding-bottom: 16px; /* Tambahkan jarak bawah */
}

.input-container {
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 999px; /* Full rounded (pill shape) */
  overflow: hidden;
  background-color: white;
}

input {
  width: 100%;
  padding: 12px 16px 12px 40px; /* Tambahkan padding atas bawah */
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 999px; /* Full rounded */
  background: transparent;
}

.search-icon {
  position: absolute;
  left: 14px;
  font-size: 18px;
  color: #999;
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
</style>
