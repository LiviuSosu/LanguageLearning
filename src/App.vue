<script>
import LanguageLearning from './components/LanguageLearning.vue'
import Admin from './components/Admin.vue'


const routes = {
  '/': LanguageLearning,
  '/admin': Admin
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}

</script>
//for routing https://jayway.github.io/vue-js-workshop/docs/routing.html
//https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
//for starting 
//  npm run build
// npm run dev
//On Windows Shift + Alt + F
<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Language learning</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>    
      </ul>
    </div>
  </div>
</nav>
 <router-view />
</template>


