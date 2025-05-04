<template>
  <div
    class="toggle-container"
    :class="{ 'dark-bg': isDarkMode, 'light-bg': !isDarkMode }"
    @click="toggleTheme"
  >
    <span class="icon left-icon" :class="{ hidden: !isDarkMode }">🌞</span>
    <span class="icon right-icon" :class="{ hidden: isDarkMode }">🌙</span>
    <div
      class="toggle-switch"
      :class="{ 'toggle-switch-dark': isDarkMode }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDarkMode } from "../hooks/useDarkMode";

export default defineComponent({
  name: "ToggleSwitch",
  setup() {
    const { isDarkMode, toggleTheme } = useDarkMode();
    return { isDarkMode, toggleTheme };
  },
});
</script>

<style scoped src="./index.css"></style>
