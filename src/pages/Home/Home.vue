<template>
  <main>
    <!-- Jumbotron text -->
    <div class="carousel-container">
      <div class="carousel-header-text">
        <h1>HOLIWINGS</h1>
        <p>NOT YOUR AVERAGE LIFESTYLE COMPANY</p>
      </div>
      <ImageCarousel class="carousel-full-width" :images="originalImages" />
    </div>
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
import SearchBar from "../../components/SearchBar/SearchBar.vue";
import GalleryCard from "../../components/CardGalery/GalleryCard.vue";
import RatingFilter from "../../components/FilterRate/RatingFilter.vue";
import ImageCarousel from "../../components/Carousel/Carousel.vue";
import DarkModeToggle from "../../components/DarkMode/DarkModeToggle.vue"; // Import DarkModeToggle
import ScrollToTop from "../../components/ScrollTop/ScrollToTop.vue";

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

<style scoped src="./index.css"></style>
