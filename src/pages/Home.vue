<template>
  <main>
    <!-- SearchBar untuk pencarian gambar -->
    <SearchBar :images="originalImages" @filtered="handleFiltered" />

    <!-- Komponen filter rating -->
    <RatingFilter @filterRating="updateRating" />

    <!-- Galeri -->
    <section class="gallery">
      <GalleryCard
        v-for="item in filteredImages"
        :key="item.id"
        :image="item"
      />
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import SearchBar from "../components/SearchBar.vue";
import GalleryCard from "../components/GalleryCard.vue";
import RatingFilter from "../components/RatingFilter.vue";

const originalImages = ref([]); // Data gambar asli
const searchResults = ref([]); // Hasil pencarian yang difilter
const selectedRating = ref(0); // Rating yang dipilih

// Fetch data gambar
onMounted(async () => {
  const res = await fetch("/data/images.json");
  const data = await res.json();
  originalImages.value = data;
  searchResults.value = data; // Set data asli ke searchResults
});

// Mengupdate hasil pencarian berdasarkan query
function handleFiltered(result) {
  searchResults.value = result;
}

// Mengupdate rating dari filter
function updateRating(val) {
  selectedRating.value = val;
}

// Filter gambar berdasarkan rating
const filteredImages = computed(() => {
  return searchResults.value.filter((img) =>
    selectedRating.value === 0 ? true : img.rating === selectedRating.value
  );
});
</script>

<style scoped>
main {
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 1rem;
  box-sizing: border-box;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
