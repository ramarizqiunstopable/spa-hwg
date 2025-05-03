<template>
  <div
    class="toggle-container"
    :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }"
    @click="toggleTheme"
  >
    <!-- 🌞 di kiri -->
    <span class="icon left-icon" :class="{ hidden: !isDarkMode }">🌞</span>

    <!-- 🌙 di kanan -->
    <span class="icon right-icon" :class="{ hidden: isDarkMode }">🌙</span>

    <!-- Bulatan toggle -->
    <div
      class="toggle-switch"
      :class="{ 'toggle-switch-dark': isDarkMode }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    isDarkMode.value = savedTheme === "dark";
  }
});

function toggleTheme() {
  const newTheme = isDarkMode.value ? "light" : "dark";
  document.body.classList.remove("dark", "light");
  document.body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
  isDarkMode.value = !isDarkMode.value;
}

export default {
  name: "DarkModeToggle", // Ekspor default untuk komponen
};
</script>

<style scoped>
.toggle-container {
  width: 80px;
  height: 34px;
  border-radius: 20px;
  padding: 4px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.light-bg {
  background-color: #eee;
}

.dark-bg {
  background-color: #222;
}

.icon {
  font-size: 18px;
  z-index: 2;
  position: absolute;
  transition: opacity 0.3s ease;
}

.left-icon {
  left: 10px;
}

.right-icon {
  right: 10px;
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

.toggle-switch {
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 4px;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.toggle-switch-dark {
  transform: translateX(46px);
  background-color: #f5f5f5;
}
</style>
