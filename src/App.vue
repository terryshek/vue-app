<template>
  <div>
    <nav>
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo left">Logo</a>
        <ul id="nav-mobile" class="right">
          <router-link activeClass='active' to="/" tag="li" exact><a>Home</a></router-link>
          <router-link activeClass='active' to="/user" tag="li" exact><a>user</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <a class="waves-effect waves-light btn" @click="addCount"> add counter</a>
      <h2>Essential Links{{counter}}</h2>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      addCount() {
        this.$store.dispatch('incrementAsync', { amount: 10 })
      }
    },
    computed: {
      counter() {
        return this.$store.getters.counter
      }
    }
  }
</script>

<style>

</style>