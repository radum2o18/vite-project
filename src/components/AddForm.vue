<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model="firstNameInput" />
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model="lastNameInput" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="ageInput" />
    </div>
    <base-button>Add User</base-button>
  </form>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import User from '../types/User';

const addUser: any = inject('addUser');
const router = useRouter();

const firstNameInput = ref('');
const lastNameInput = ref('');
const ageInput = ref(0);

function submitForm() {
  addUser({
    id: Date.now().toString(),
    firstName: firstNameInput,
    lastName: lastNameInput,
    age: ageInput,
  });
  router.push('/users');
}
</script>

<style lang="postcss" scoped>
input,
label {
  @apply flex
  w-full;
}

label {
  @apply font-bold;
}

input {
  @apply mb-2
  border;
}
</style>
