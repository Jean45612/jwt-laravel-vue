<template>
  <div class="container">
    <b-form @submit="login" autocomplete="off">
      <h3>Login</h3>
      <b-form-group label="Usuario">
        <b-form-input v-model="form.email" type="email" placeholder="usuario@example.com"></b-form-input>
      </b-form-group>
      <b-form-group label="Contraseña">
        <b-form-input v-model="form.password" type="password"></b-form-input>
      </b-form-group>

      <error-vue :errors="errors" :error="error"></error-vue>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/api";
import token from "@/services/token";
import ErrorVue from "../../components/Error.vue";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },

      errors: null,
      error: null,
    };
  },
  components: {
    ErrorVue,
  },
  methods: {
    login() {
      this.errors = null;
      this.error = null;
      api.post("login", this.form).then(
        (data) => {
          token.setToken(data.access_token, data.user);
          this.$swal("Bienvenido", "", "success");
          this.$router.push({ name: "home" });
        },
        (error) => {
          if (error.data.errors) {
            this.errors = error.data.errors;
          } else {
            this.error = error.data.error;
          }
        }
      );
    },
  },
};
</script>
