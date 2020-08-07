<template>
  <div class="menu-container">
    <ul class="menu">
      <li class="menu__top">
        <router-link to="/" class="menu__logo">
          <img src="/icon-32.png" alt="icon" />
        </router-link>
        <label href="#" class="menu__title">Titulo Menu</label>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('home')" :class="highlightSection('home')">
          <i class="fa fa-home menu__icon" aria-hidden="true"></i>
          Home
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('about')" :class="highlightSection('about')">
          <i class="fa fa-adn menu__icon" aria-hidden="true"></i>
          About
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('products')" :class="highlightSection('products')">
          <i class="fa fa-tag menu__icon" aria-hidden="true"></i>
          Products
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>

      <li>
        <a href="#" @click.prevent="updateMenu('customers')" :class="highlightSection('customers')">
          <i class="fa fa-users menu__icon" aria-hidden="true"></i>
          Customers
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li>
    </ul>

    <!-- context menu: childs of root level itens -->
    <transition name="slide-fade">
      <div class="context-menu-container" v-show="showContextMenu">
        <ul class="context-menu">
          <li v-for="(item, index) in menuItens" :key="index">
            <h5 v-if="item.type === 'title'" class="context-menu__title">
              <i :class="item.icon" aria-hidden="true"></i>

              {{item.txt}}
              <a
                v-if="index === 0"
                @click.prevent="closeContextMenu"
                class="context-menu__btn-close"
                href="#"
              >
                <i class="fa fa-window-close" aria-hidden="true"></i>
              </a>
            </h5>

            <a
              v-else
              href="#"
              @click.prevent="openSection(item)"
              :class="subMenuClass(item.txt)"
            >{{item.txt}}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import menuData from "@/services/menu-data";
import kebabCase from "lodash/kebabCase";
export default {
  name: "Menu",
  data() {
    return {
      contextSection: "",
      menuItens: [],
      menuData: menuData,
      activeSubMenu: "",
    };
  },
  methods: {
    updateMenu(context) {
      this.contextSection = context;
      this.menuItens = this.menuData[context];
      if(!this.menuItens.length){
        this.$router.push({ name: context });
        window.bus.$emit("menu/closeMobileMenu");
      }
    },
    highlightSection(section) {
      return {
        menu__link: true,
        "menu__link--active": section === this.contextSection,
      };
    },
    subMenuClass(subMenuName) {
      return {
        "context-menu__link": true,
        "context-menu__link--active": this.activeSubMenu === subMenuName,
      };
    },
    closeContextMenu() {
      this.contextSection = "";
      this.menuItens = [];
    },
    openSection(item) {
      this.activeSubMenu = item.txt;
      this.$router.push({ name: this.getUrl(item) });
      window.bus.$emit("menu/closeMobileMenu");
    },
    getUrl(item) {
      return `${item.link}`;
    },
  },
  computed: {
    showContextMenu() {
      return this.menuItens.length;
    },
  },
};
</script>