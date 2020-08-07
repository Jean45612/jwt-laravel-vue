<template>
  <div id="wrapper" :class="wrapperClass">
    
    <div v-if="isLoggedIn()">
      <nav-bar-vue v-if="isLoggedIn()"></nav-bar-vue>
      <Menu></Menu>
      <MenuToggleBtn></MenuToggleBtn>
      <ContentOverlay></ContentOverlay>
    </div>

    <div class="content main-content__body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./components/NavBar.vue";
import token from "@/services/token";
import Menu from "./components/Menu/Menu.vue";
import ContentOverlay from "./components/Menu/ContentOverlay.vue";
import MenuToggleBtn from "./components/Menu/MenuToggleBtn.vue";

export default {
  components: {
    NavBarVue,
    Menu,
    ContentOverlay,
    MenuToggleBtn,
  },
  created() {
    window.bus.$on("menu/toggle", () => {
      window.setTimeout(() => {
        this.isOpenMobileMenu = !this.isOpenMobileMenu;
      }, 200);
    });

    window.bus.$on("menu/closeMobileMenu", () => {
      this.isOpenMobileMenu = false;
    });
  },
  methods: {
    isLoggedIn() {
      return token.loggedIn();
    },
  },
  data() {
    return {
      isOpenMobileMenu: false,
    };
  },

  computed: {
    wrapperClass() {
      return {
        toggled: this.isOpenMobileMenu === true,
      };
    },
  },
};
</script>


<style>
@import "./styles/general.css";
</style>

<style lang="scss">
//PARA EL MENU
@import "./styles/menu/layout.scss";
@import "./styles/menu/menu-toggle-btn.scss";
@import "./styles/menu/menu.scss";
@import "./styles/menu/content-overlay.scss";
@import "./styles/menu/media-queries.scss";
</style>

