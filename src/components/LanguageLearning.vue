<script>
export default {
  data() {
    return {
      text: 'Edit me'
    }
  }
}
</script>

<template>
  <h2>Text Input</h2>
 <input v-model="text"> {{ text }}
 </template>