<script>
import WordImage from "./LanguageLearning/WordImage.vue";
import RestResource from "../services/index.js";
const restResourceService = new RestResource();

export default {
  data() {
    return {
      options: ["A", "B", "C"],
      value: "B",
      someTest: restResourceService.getData(),
    };
  },
  components: {
    WordImage,
  },
  methods: {
    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${event}!`);
      // `event` is the native DOM event
      //if (event) {
      //alert(event.target.tagName)
      //}
    },
  },
};
</script>

<template>
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Category: {{ value }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
      <li v-for="option in options" :key="option">
        <a
          class="dropdown-item"
          @click="
            greet(option);
            value = option;
          "
          >{{ option }}</a
        >
      </li>
    </ul>
  </div>

  <WordImage />

  {{ someTest }}
</template>
