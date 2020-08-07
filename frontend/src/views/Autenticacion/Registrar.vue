<template>
  <div class="container">
    <h3>Registrar</h3>
    <b-form @submit="guardar" autocomplete="off">
      <b-form-group label="Usuario">
        <b-form-input v-model="form.email" type="email" placeholder="usuario@example.com"></b-form-input>
      </b-form-group>

      <b-form-group label="Contraseña">
        <b-form-input v-model="form.password" type="password"></b-form-input>
      </b-form-group>

      <b-form-group label="Confirmar contraseña">
        <b-form-input v-model="form.password_confirmation" type="password"></b-form-input>
      </b-form-group>

      <error-vue :errors="errors"></error-vue>

      <b-button type="submit" variant="primary">Registrarse</b-button>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/api";
import ErrorVue from "../../components/Error.vue";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        password_confirmation: null,
        rol_id: 1,
      },

      errors: null,
    };
  },
  components: {
    ErrorVue,
  },
  methods: {
    guardar() {
      api.post("register", this.form).then(
        (data) => {
          this.$swal("Registro exitoso", "", "success");
          this.$router.push({ name: "login" });
        },
        (error) => {
          this.errors = error.data.errors;
        }
      );
    },
  },
};
</script>
