<template>
  <section>
    <p v-if="loadedUsers.length == 0">No users found!</p>
    <ul v-else>
      <li v-for="(user, index) in loadedUsers" :key="user.id">
        <h3><b>First name:</b> {{ user.firstName }}</h3>
        <h3><b>Last name:</b> {{ user.lastName }}</h3>
        <h4><b>Age:</b> {{ user.age }}</h4>
        <h5><b>User id:</b>{{ user.id }}</h5>

        <button @click="remove(index)">Delete user</button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import User from '../types/User';

let loadedUsers = inject('users') as User[];
let deleteUser: any = inject('removeUser');

function remove(index: number) {
  deleteUser(index);
}
</script>

<style lang="postcss" scoped>
button {
  @apply bg-red-400
  border-solid
  border
  border-red-400
  cursor-pointer
  text-white
  p-2;
}

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

p {
  @apply font-bold;
}

ul {
  @apply m-0
    p-0
    list-none;
}

li {
  @apply m-4
    border-solid
    border
    border-gray-50;
}

h3,
h4 {
  @apply m-2;
}
</style>
