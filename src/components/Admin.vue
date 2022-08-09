<script>
export default {
  data() {
    return {
      model: {
        word: "",
        value: "B",
        options: ["A", "B", "C"],
      },
    };
  },
  methods: {
    greet(model) {
      alert(`Hello ` + model.word);
    },
    categorySelected(category) {
      alert(`You've selected ` + category);
    },
  },
};
</script>

<template>
  <h3>This is the admin view</h3>
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Dropdown button: {{ model.value }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
      <li v-for="option in model.options" :key="option">
        <a class="dropdown-item" @click="categorySelected(option); value = option;">{{ option }}</a>
      </li>
    </ul>
  </div>
  <p>Message is: {{ model.word }}</p>
  <input v-model="model.word" placeholder="edit me" />
  <button
    type="button"
    class="btn btn-primary"
    @click="
      greet(model);
      value = model;
    "
  >
    Primary
  </button>
</template>
