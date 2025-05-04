import { ref, onMounted, onBeforeUnmount } from "vue";

export function useScroll() {
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

  return { visible, scrollToTop };
}
