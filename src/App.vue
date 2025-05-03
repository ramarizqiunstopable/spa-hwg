<script lang="ts">
import { defineComponent } from "vue";
import Home from "./pages/Home.vue"; // Mengimpor Home dengan default export

export default defineComponent({
  name: "App",
  components: {
    Home,
  },
});
</script>

<template>
  <div>
    <Home />
    <!-- Menampilkan komponen Home -->
  </div>
</template>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
