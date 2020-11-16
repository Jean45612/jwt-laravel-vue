<template>
  <div class="home">
    sdfsdf
  </div>
</template>

<script>
import api from "@/services/api";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLoading: false,
      rows: [],
      search: "",
      orderBy: "desc",
      sortBy: "id",
      perPage: 10,
      page: 1,
      totalRecords: 0,
      columns: [
        {
          label: "Id",
          field: "id",
          type: "number",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Rol",
          field: "rol.nombre",
          sortable: false,
        },
        {
          label: "Actions",
          field: "actions",
          sortable: false,
        },
      ],
    };
  },
  created() {
    api
        .get(
          "user?search=" +
            this.search +
            "&orderBy=" +
            this.orderBy +
            "&sortBy=" +
            this.sortBy +
            "&perPage=" +
            this.perPage +
            "&page=" +
            this.page
        )
        .then((data) => {
          this.rows = data.rows;
          this.totalRecords = data.totalRecords;
        });
  },
};
</script>
