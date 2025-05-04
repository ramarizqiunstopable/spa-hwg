<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="scroll-to-top"
    aria-label="Scroll to top"
  >
    ˄
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ScrollTop",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    scrollToTop: {
      type: Function as PropType<() => void>, // Menghapus MouseEvent, karena tidak digunakan
      required: true,
    },
  },
});
</script>
