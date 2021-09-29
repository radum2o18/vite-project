<template>
  <h2>Add a user</h2>
  <base-card>
    <add-form></add-form>
  </base-card>
</template>

<script lang="ts" setup>
import AddForm from '../components/AddForm.vue';

components: {
  AddForm;
}
</script>

<style scoped lang="postcss">
h2 {
  @apply flex
  justify-center
  font-bold
  mt-16;
}
</style>
