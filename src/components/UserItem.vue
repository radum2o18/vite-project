<template>
  <li>
    <h3><b>First name:</b> {{ firstName }}</h3>
    <h3><b>Last name:</b> {{ lastName }}</h3>
    <h4><b>Age:</b> {{ age }}</h4>
    <h5><b>User id:</b>{{ userId }}</h5>
    <base-button @click="remove(index)">Delete user</base-button>
  </li>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import User from '../types/User';

const props = withDefaults(
  defineProps<{
    firstName: string;
    lastName: string;
    age: number;
    userId: string;
    index: number;
  }>(),
  {
    firstName: '',
    lastName: '',
    age: 18,
    userId: '',
    index: 0,
  },
);

let deleteUser: any = inject('removeUser');

function remove(index: number) {
  deleteUser(index);
}
</script>

<style scoped lang="postcss">
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
