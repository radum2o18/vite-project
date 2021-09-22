<template>
  <h2>Add a user</h2>
  <section>
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
      <button>Add User</button>
    </form>
  </section>
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
    id: Date.now(),
    firstName: firstNameInput,
    lastName: lastNameInput,
    age: ageInput,
  });
  router.push('/users');
}
</script>

<style lang="postcss" scoped>
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

h2 {
  @apply flex
  justify-center
  font-bold
  mt-16;
}

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

button {
  @apply bg-red-400
  border-solid
  border
  border-red-400
  cursor-pointer
  text-white
  p-2;
}
</style>
