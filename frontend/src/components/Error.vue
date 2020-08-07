<template>
  <div>
    <div v-if="errors">
      <div v-for="(error,index) in errors" :key="index">
        <b-alert show variant="danger" v-for="(item,index2) in error" :key="index2">{{item}}</b-alert>
      </div>
    </div>

    <b-alert show variant="danger" v-if="error">{{error}}</b-alert>
  </div>
</template>

<script>
export default {
  name: "Error",
  components: {},
  props: { errors: null, error:null },
  data() {
    return {};
  },
  methods: {},
};
</script>
