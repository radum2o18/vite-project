<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply max-w-2xl
    p-4
    rounded-md
    shadow-md
    m-auto
    mt-16
    flex
    justify-center;
}
</style>
