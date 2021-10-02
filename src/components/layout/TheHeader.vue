<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/users">Users</router-link>
        </li>
        <li>
          <router-link to="/add">Add User</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
header {
  @apply w-full
    bg-gray-700
    h-10;
}

nav {
  @apply h-full;
}

ul {
  @apply m-0
    p-0
    h-full
    flex
    justify-center
    items-center;
}

li {
  @apply m-1;
}

a {
  @apply no-underline
    text-yellow-500
    font-bold;
}

a:hover,
a:active,
a.router-link-active {
  @apply text-yellow-300;
}
</style>
