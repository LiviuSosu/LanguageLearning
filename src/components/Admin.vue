<script>
export default {
  data() {
    return {
      model: {
        word:'',
        category:''
      }
    }
  },
   methods: {
  greet(model) {
   alert(`Hello `+model.word)
  }}
}
</script>

<template>
  <h3>This is the admin view</h3>
  <p>Message is: {{ model.word }}</p>
	<input v-model="model.word" placeholder="edit me" />
  <button type="button" class="btn btn-primary" @click="greet(model); value = model" >Primary</button>
 </template>