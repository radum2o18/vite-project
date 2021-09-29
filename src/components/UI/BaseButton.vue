<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="postcss">
button {
  @apply bg-red-400
  border-solid
  border
  border-red-400
  cursor-pointer
  text-white
  p-2
  mt-4;
}
</style>
