<template>
  <div class="stars">
    <span v-for="n in Math.floor(rating)" :key="n">⭐</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RatingStars",
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped src="./index.css"></style>
