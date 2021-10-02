<template>
  <base-card>
    <base-search></base-search>
  </base-card>
  <base-card v-if="loadedUsers.length == 0">
    <p>No users found!</p>
  </base-card>
  <ul v-else>
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
  </ul>
</template>

<script lang="ts" setup>
import UserItem from '../components/UserItem.vue';
import { inject } from 'vue';
import User from '../types/User';

let loadedUsers = inject('users') as User[];
</script>

<style lang="postcss" scoped>
p {
  @apply font-bold;
}

ul {
  @apply m-0
    p-0
    list-none;
}
</style>
