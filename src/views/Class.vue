<template>
  <div class="a-class">
    <MainNav />
    <b-row class="a-view">
      <b-col :md="sidebar.size">
        <ClassNav @selected="setSidebarOption($event)" @size="setSidebarSize($event)" />
      </b-col>
      <b-col md="9">
        <Videoconference v-if="sidebar.opt == 1" />
        <Resources v-else-if="sidebar.opt == 2" />
        <Homeworks v-else-if="sidebar.opt == 3" />
        <Attendance v-else-if="sidebar.opt == 4" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MainNav from "@/components/NavBars/MainNav";
import ClassNav from "@/components/NavBars/ClassNav";

// Componentes de clase
    import Videoconference from "@/components/Areas/Videoconference";
    import Resources from "@/components/Areas/Resources";
    import Homeworks from "@/components/Areas/Homeworks";
    import Attendance from "@/components/Areas/Attendance";


export default {
  name: "Class",
  components: {
    MainNav,
    ClassNav,
    Videoconference,
    Resources,
    Homeworks,
    Attendance
  },
  data() {
    return {
      sidebar: {
        size: "2",
        opt: 1
      }
    };
  },
  methods: {
    setSidebarSize(size) {
      this.sidebar.size = size;
    },
    setSidebarOption(opt) {
      this.sidebar.opt = opt;
    }
  }
};
</script>

<style scoped>
.a-class {
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
}

.a-class .a-view {
  min-height: 100%;
  display: flex;
}
</style>

<style>
.col-md-2 {
  flex-grow: 1 !important;
  transition: all 500ms ease !important;
}
.col-md-1 {
  flex-grow: 1 !important;
  transition: all 300ms ease !important;
}
@media (max-width: 768px) {
  .col-md-1 {
    max-width: 100% !important;
    height: fit-content;
  }
}
</style>