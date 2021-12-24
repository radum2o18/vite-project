<template>
  <input
    class="search-bar focus:outline-none"
    type="search"
    placeholder="John Doe"
    v-model="searchTerm"
  />
  <img
    src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
  />
  <user-item
    v-for="(user, index) in loadedUsers"
    :key="user.id"
    :first-name="user.firstName"
    :last-name="user.lastName"
    :age="user.age"
    :user-id="user.id"
    :index="index"
  >
  </user-item>
</template>

<script setup lang="ts">
// import UserItem from '../../components/UserItem.vue';
import { inject, computed, ref } from 'vue';
import User from '../../types/User';

let loadedUsers = inject('users') as User[];
const searchTerm = ref('');
</script>

<style scoped lang="postcss">
.search-bar {
  @apply border-b
  w-full;
}
</style>
