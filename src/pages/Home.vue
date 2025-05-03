<template>
  <main>
    <!-- SearchBar untuk pencarian gambar -->
    <ImageCarousel :images="originalImages" />
    <!-- SearchBar untuk pencarian gambar dan Filter Rating (sejajar kiri-kanan) -->
    <div class="filter-container">
      <div class="filter-item left">
        <DarkModeToggle />
      </div>
      <div class="filter-item center">
        <SearchBar :images="originalImages" @filtered="handleFiltered" />
      </div>
      <div class="filter-item right">
        <RatingFilter @filterRating="updateRating" />
      </div>
    </div>

    <!-- Galeri -->
    <section v-if="filteredImages.length > 0" class="gallery">
      <GalleryCard
        v-for="item in filteredImages"
        :key="item.id"
        :image="item"
      />
    </section>

    <div v-else class="not-found-card">
      <div class="not-found-content">
        <h2>😕 Tidak ada gambar ditemukan</h2>
        <p>Silakan coba kata kunci lain atau ubah filter rating.</p>
      </div>
    </div>

    <ScrollToTop />
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import SearchBar from "../components/SearchBar.vue";
import GalleryCard from "../components/GalleryCard.vue";
import RatingFilter from "../components/RatingFilter.vue";
import ImageCarousel from "../components/Carousel.vue";
import DarkModeToggle from "../components/DarkModeToggle.vue"; // Import DarkModeToggle
import ScrollToTop from "../components/ScrollToTop.vue";

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

  padding: 0 1rem;
  box-sizing: border-box;
}

.filter-container {
  z-index: 999;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin: 5px 0;

  background-color: var(--bg-color);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 0.5rem;
}

.filter-item {
  flex: 1;
}

.filter-item.center {
  display: flex;
  justify-content: center;
}

.filter-item.right {
  display: flex;
  justify-content: flex-end;
}

/* Mobile layout */
@media (max-width: 600px) {
  .filter-container {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-item {
    width: 100%;
  }
}

/* Light theme */
:root {
  --bg-color: #ffffff;
}

/* Dark theme */
body.dark {
  --bg-color: #1e1e1e;
  background-color: #121212;
  color: #ffffff;
}

body.dark .gallery-card {
  background-color: #333;
  border: 1px solid #555;
}

@media (max-width: 600px) {
  .filter-container {
    flex-direction: column; /* Atur menjadi vertikal pada layar kecil */
    align-items: flex-start; /* Mepet ke kiri pada mobile */
  }
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

.not-found {
  text-align: center;
  font-size: 1.2rem;
  color: #999;
  padding: 2rem;
}

.not-found-card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
}

.not-found-content {
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

body.dark .not-found-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff !important;
}

.not-found-content p {
  font-size: 1rem;
  color: #666;
}

/* Dark mode */
body.dark .not-found-content {
  background-color: #2c2c2c;
  border-color: #444;
  color: #fff;
}

body.dark .not-found-content p {
  color: #aaa;
}
</style>
