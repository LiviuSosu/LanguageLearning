<script>
import axios from 'axios'

export default {
  data() {
    return {
      model: {
        word: "",
        value: "B",
        options: ["A", "B", "C"],
        category: ""
      },
    };
  },
  methods: {
    inputCategory(model){
          alert(`Hello ` + model.category);
    },
    inputWord(model) {
      alert(`Hello ` + model.word);
    },
    categorySelected(category) {
      alert(`You've selected ` + category);
    },
  },

   mounted () {
    axios
      .get('https://desolate-everglades-09574.herokuapp.com/')
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  }
};
</script>

<template>
  <h3>Add new category</h3>
    {{ info2 }}
  <input v-model="model.category" placeholder="add category"/>
  <button
    type="button"
    class="btn btn-primary"
    @click="
      inputCategory(model);
      value = model;
    "
  >Add Category</button>
  <h3>Add new word</h3>
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Select category: {{ model.value }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
      <li v-for="option in model.options" :key="option">
        <a
          class="dropdown-item"
          @click="
            categorySelected(option);
            value = option;
          "
          >{{ option }}</a
        >
      </li>
    </ul>
  </div>
  <p>Message is: {{ model.word }}</p>
  <input v-model="model.word" placeholder="edit me" />
  <button
    type="button"
    class="btn btn-primary"
    @click="
      inputWord(model);
      value = model;
    "
  >
  Add Word
  </button>
</template>
