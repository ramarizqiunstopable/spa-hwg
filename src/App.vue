<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Home: defineAsyncComponent(() => import("./pages/Home.vue")),
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
