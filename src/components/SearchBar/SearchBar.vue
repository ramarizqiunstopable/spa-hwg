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
import type { ImageData } from "@/types/ImageData"; // Sesuaikan path jika perlu

const props = defineProps<{
  images: ImageData[];
}>();

const emit = defineEmits<{
  (event: "filtered", value: ImageData[]): void;
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
  emit("filtered", suggestions.value);
};

const selectSuggestion = (img: ImageData) => {
  emit("filtered", [img]);
  query.value = img.title;
  suggestions.value = [];
};
</script>

<style scoped src="./index.css"></style>
