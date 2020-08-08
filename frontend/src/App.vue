<template>
  <div id="app">
    <menu-vue v-if="isLoggedIn()"></menu-vue>
    <nav-bar-vue :class="wrapperClass()" v-if="isLoggedIn()"></nav-bar-vue>
    <div class="content" :class="wrapperClass()">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./components/NavBar.vue";
import token from "@/services/token";
import MenuVue from "./components/Menu.vue";
export default {
  components: {
    NavBarVue,
    MenuVue,
  },
  methods: {
    isLoggedIn() {
      return token.loggedIn();
    },
    wrapperClass() {
      return {
        "menu-open": !this.menu_open,
        "menu-close": this.menu_open,
      };
    },
  },
  data() {
    return {
      menu_open: false,
    };
  },
  mounted() {
    this.$root.$on("menu-collapsed", (value) => {
      //SI EL VALOR ES TRUE SE CIERRA EL MENU, SINO SE ABRE
      this.menu_open = value;
    });
  },
};
</script>


<style>
@import "./styles/general.css";
</style>

