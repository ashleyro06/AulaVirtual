<template>
  <div class="a-class">
    <MainNav />
    <b-row class="a-view">
      <b-col :md="sidebar.size">
        <GradeNav @selected="setSidebarOption($event)" @size="setSidebarSize($event)" />
      </b-col>
      <b-col md="9">
        <PeopleList :people="students" v-if="sidebar.opt==1" />
        <ClassList :people="areas" v-if="sidebar.opt==2" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import MainNav from "@/components/NavBars/MainNav";
import GradeNav from "@/components/NavBars/GradeNav";

import PeopleList from "@/components/General/PeopleList";
import ClassList from "@/components/General/ClassList";

export default {
  name: "Grade",
  components: {
    MainNav,
    GradeNav,
    PeopleList,
    ClassList
  },
  data() {
    return {
      sidebar: {
        size: "2",
        opt: 1
      },
      students: [
        { id: 1, name: "Estudiante 1 Nombre", short: "E1N" },
        { id: 2, name: "Estudiante 2 Nombre", short: "E2N" },
        { id: 3, name: "Estudiante 3 Nombre", short: "E3N" }
      ],
      areas: [
        { id: 1, name: "Matemáticas", short: "M" },
        { id: 2, name: "Ciencias", short: "C" },
        { id: 3, name: "Sociales", short: "S" }
      ]
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