<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>

<template>
  <h3>This is the admin view</h3>
  <p>Message is: {{ message }}</p>
	<input v-model="message" placeholder="edit me" />
 </template>