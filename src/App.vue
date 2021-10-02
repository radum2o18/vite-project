<template>
  <the-header></the-header>
  <router-view></router-view>
</template>
>

<script lang="ts" setup>
import User from './types/User';
import { ref } from '@vue/reactivity';
import TheHeader from './components/layout/TheHeader.vue';
import { provide } from '@vue/runtime-core';
const users = ref<User[]>([]);

function addUser(data: User) {
  const newUser = {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
  };
  users.value.push(newUser);
}

function removeUser(index: any) {
  users.value.splice(index, 1);
}

provide('users', users);
provide('addUser', addUser);
provide('removeUser', removeUser);
</script>
