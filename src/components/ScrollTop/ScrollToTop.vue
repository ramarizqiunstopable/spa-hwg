<template>
  <ScrollTop :visible="visible" :scrollToTop="scrollToTop" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScrollTop from "./components/ScrollTop.vue";
import { useScroll } from "./hooks/useScroll";
import "./components/index.css";

export default defineComponent({
  name: "ScrollToTopWrapper",
  components: {
    ScrollTop,
  },
  setup() {
    const { visible, scrollToTop } = useScroll();
    return { visible, scrollToTop };
  },
});
</script>
