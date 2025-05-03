<template>
  <main>
    <!-- Tombol Toggle Dark Mode -->
    <DarkModeToggle />

    <!-- SearchBar untuk pencarian gambar -->
    <SearchBar :images="originalImages" @filtered="handleFiltered" />
    <ImageCarousel :images="originalImages" />

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
import ImageCarousel from "../components/Carousel.vue";
import DarkModeToggle from "../components/DarkModeToggle.vue"; // Import DarkModeToggle

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
  grid-template-columns: repeat(4, 1fr); /* Default: 4 columns */
  gap: 1rem;
  margin-bottom: 50px;
}

/* For screens wider than 1200px, display 4 columns */
@media (max-width: 1200px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }
}

/* For screens wider than 900px, display 3 columns */
@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
  }
}

/* For screens smaller than 600px, display 1 column */
@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr; /* 1 column for very small screens */
  }
}

/* Dark theme */
body.dark {
  background-color: #121212;
  color: #fff;
}

body.dark .gallery-card {
  background-color: #333;
  border: 1px solid #555;
}
</style>
