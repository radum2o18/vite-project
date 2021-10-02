<template>
  <input
    class="search-bar focus:outline-none"
    type="search"
    placeholder="John Doe"
  />
  <img
    src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
  />
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.search-bar {
  @apply border-b
  w-full;
}
</style>
