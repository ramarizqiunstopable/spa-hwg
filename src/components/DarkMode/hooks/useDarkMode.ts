import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

export function useDarkMode() {
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      document.body.classList.add(savedTheme);
      isDarkMode.value = savedTheme === "dark";
    }
  });

  const toggleTheme = () => {
    const newTheme = isDarkMode.value ? "light" : "dark";
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleTheme,
  };
}
