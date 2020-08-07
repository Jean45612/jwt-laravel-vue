<template>
  <div id="app">
    <nav-bar-vue v-if="isLoggedIn()"></nav-bar-vue>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./components/NavBar.vue";
import token from "@/services/token";
export default {
  components: {
    NavBarVue,
  },
  methods: {
    isLoggedIn() {
      return token.loggedIn();
    },
  },
};
</script>


<style>
@import "./assets/styles/general.css";
</style>

