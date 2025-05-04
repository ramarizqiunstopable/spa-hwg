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
import { ImageData } from "../../types/ImageData";

const props = defineProps<{
  images: ImageData[];
}>();

const emit = defineEmits<{
  filtered: [ImageData[]];
}>();

const query = ref("");
const suggestions = ref<ImageData[]>([]);

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

const onSearch = () => {
  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const q = query.value.toLowerCase();
    suggestions.value = props.images.filter(
      (img) =>
        img.title.toLowerCase().includes(q) ||
        img.description.toLowerCase().includes(q)
    );
    emit("filtered", suggestions.value);
  }, 300); // Delay 300ms
};

const selectSuggestion = (img: ImageData) => {
  emit("filtered", [img]);
  query.value = img.title;
  suggestions.value = [];
};
</script>

<style scoped src="./index.css"></style>
