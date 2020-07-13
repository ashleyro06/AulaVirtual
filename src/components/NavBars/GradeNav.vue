<template>
  <b-navbar id="sidebar" class="a-sidebar">
    <b-navbar-nav class="a-sidebar-nav">
      <b-nav-item>
        <b-button variant="light" style="font-size:20px; margin:auto" @click="toggleShow()">
          <font-awesome-icon icon="bars" />
        </b-button>
      </b-nav-item>

      <!-- Tipos de archivo -->
      <b-nav-item>
        <b-button v-b-toggle.collapse-2 variant="light" @click="$emit('selected', 1)">
          <font-awesome-icon icon="users" style="font-size:20px; margin:auto" />
          <span v-if="!collapsed">Estudiantes</span>
        </b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button v-b-toggle.collapse-2 variant="light" @click="$emit('selected', 2)">
          <font-awesome-icon icon="chalkboard-teacher" style="font-size:20px; margin:auto" />
          <span v-if="!collapsed">Asignaturas</span>
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    toggleShow() {
      this.collapsed = !this.collapsed;

      let size = "";
      !this.collapsed ? (size = "3") : (size = "2");
      this.$emit("size", size);
    }
  }
};
</script>

<style scoped>
.btn {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: var(--global-color-1);
}

.a-sidebar,
.a-sidebar-nav {
  display: flex;
  min-width: 100px;
}

@media (min-width: 769px) {
  .a-sidebar-nav {
    flex-flow: column nowrap !important;
    overflow-x: hidden;
    background: white;
    height: 100%;
  }

  .a-sidebar {
    height: 100%;
    flex-flow: column nowrap;
    overflow-x: hidden;
    background: white;
    -webkit-box-shadow: 8px 2px 11px -4px rgba(0, 0, 0, 0.73);
    -moz-box-shadow: 8px 2px 11px -4px rgba(0, 0, 0, 0.73);
    box-shadow: 8px 2px 11px -4px rgba(0, 0, 0, 0.73);
  }
}
@media (max-width: 768px) {
  .a-sidebar-nav {
    width: 100%;
    flex-flow: row nowrap !important;
  }

  .a-sidebar {
    width: 100%;
    height: fit-content;
    flex-flow: row nowrap !important;
    overflow-x: auto;
    -webkit-box-shadow: inset 0px 1px 11px 0px rgba(0, 0, 0, 0.73);
    -moz-box-shadow: inset 0px 1px 11px 0px rgba(0, 0, 0, 0.73);
    box-shadow: inset 0px 1px 11px 0px rgba(0, 0, 0, 0.73);
  }
  .col-md-1 {
    max-width: 100% !important;
  }
}
</style>