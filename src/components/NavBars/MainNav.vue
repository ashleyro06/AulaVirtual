<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-brand :to="{name: routeName}">
      <b-img :src="require('@/assets/logo.png')" alt="Logo" fluid class="r-img"></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="user-collapse"></b-navbar-toggle>

    <b-collapse id="user-collapse" is-nav>
      <b-nav-text>ROVOFIC DESIMGH</b-nav-text>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <font-awesome-icon icon="user" :style="{ color: '#201c71' }" />
            Conectado: {{ user }}
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item :to="{name: 'Login'}">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavbarTopDemo",
  data() {
    return {
      user: "Fabricio"
    };
  },
  computed: {
    routeName() {
      let name = "";
      switch (this.$store.getters.getCurrentRole) {
        case "Estudiante":
          name = "StudentHome";
          break;
        case "Docente":
          name = "TeacherHome";
          break;
      }
      return name;
    }
  }
};
</script>

<style scoped>
.bg-light {
  background-color: #f8fcff !important;
}
.navbar {
  -webkit-box-shadow: 0px 10px 18px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 18px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 18px -9px rgba(0, 0, 0, 0.75);
  border: none;
  margin-bottom: 20px;
}
.r-img {
  max-height: 70px;
  margin-right: 50px;
}
</style>