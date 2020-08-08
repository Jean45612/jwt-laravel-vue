<template>
  <div>
    <sidebar-menu :menu="menu" @toggle-collapse="onToggleCollapse" />
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      menu: [
        {
          href: "/",
          title: "Inicio",
          icon: "fas fa-home",
        },
        {
          href: "roles",
          title: "Roles",
          icon: "fab fa-expeditedssl",
        },
        {
          title: "Herramientas",
          icon: "fas fa-tools",
          child: [
            {
              href: "ajustes",
              title: "Ajustes",
              icon: "fas fa-cogs",
            },
            {
              href: "menu",
              title: "Menu",
              icon: "fab fa-elementor",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onToggleCollapse(collapsed) {
      this.$root.$emit("menu-collapsed", collapsed);
    },
  },
};
</script>

<style>
@import "../styles/menu.css";
</style>


