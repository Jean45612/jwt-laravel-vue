<template>
  <div>
    <b-navbar type="dark" variant="info">
      <span>logo </span>
      <b-navbar-brand to="/">Titulo Sistema</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <span>{{userName()}}</span>
            </template>
            <b-dropdown-item href="#">Mi Perfil</b-dropdown-item>
            <b-dropdown-item @click="logout()">Cerrar sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import api from "@/services/api";
import token from "@/services/token";

export default {
  name: "NavBar",
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      api.post("logout", "").then(
        (data) => {
          this.handleLogout();
        },
        (error) => {
          this.handleLogout();
        }
      );
    },

    userName() {
      return token.getUser().email;
    },

    handleLogout() {
      this.logged = false;
      token.remove();

      this.$router.push({ name: "login" });
    },
  },
};
</script>


