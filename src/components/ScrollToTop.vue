<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="scroll-to-top"
    aria-label="Scroll to top"
  >
    ⬆️
  </button>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const visible = ref(false);

const handleScroll = () => {
  visible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  padding: 12px 16px;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: #59a4ef;
  color: var(--scroll-text);
}

/* Light mode */
:root {
  --scroll-bg: #333;
  --scroll-text: #fff;
}

/* Dark mode */
.dark {
  --scroll-bg: #eee;
  --scroll-text: #000;
}

.scroll-to-top:hover {
  filter: brightness(1.1);
}
</style>
