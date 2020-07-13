<template>
  <div class="a-student">
    <MainNav />
    <b-card class="a-card">
      <b-tabs pills card>
        <b-tab title="Mis clases" active>
          <div class="a-area">
            <Area
              v-for="area in myClasses"
              :key="area.id"
              :name="area.name"
              v-on:clicked="viewClass(area.id)"
            />
          </div>
        </b-tab>
        <b-tab title="Mi horario">
          <Schedule :classes="myClasses" />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import MainNav from "@/components/NavBars/MainNav";
import Schedule from "@/components/Schedule";
import Area from "@/components/General/Area";
export default {
  components: {
    MainNav,
    Schedule,
    Area
  },
  data() {
    return {
      myClasses: [
        {
          id: "1",
          name: "Matemáticas",
          schedule: [
            { start: 6, end: 7, day: "Jueves" },
            { start: 6, end: 8, day: "Lunes" }
          ]
        },
        {
          id: "2",
          name: "Español",
          schedule: [
            { start: 6, end: 7, day: "Viernes" },
            { start: 8, end: 9, day: "Lunes" }
          ]
        },
        {
          id: "3",
          name: "Ciencias",
          schedule: [
            { start: 6, end: 7, day: "Miércoles" },
            { start: 8, end: 10, day: "Martes" }
          ]
        },
        {
          id: "4",
          name: "Sociales",
          schedule: [
            { start: 11, end: 12, day: "Lunes" },
            { start: 7, end: 9, day: "Jueves" }
          ]
        }
      ]
    };
  },
  methods: {
    viewClass(classId) {
      this.$router.push({ name: "Class", params: { id: classId } });
    }
  }
};
</script>

<style>
.a-student .a-card {
  margin: 5% 10%;
  border-color: transparent;
  border-radius: 0 0 20px 20px;
  -webkit-box-shadow: 5px 8px 15px -2px rgba(122, 122, 122, 1);
  -moz-box-shadow: 5px 8px 15px -2px rgba(122, 122, 122, 1);
  box-shadow: 5px 8px 15px -2px rgba(122, 122, 122, 1);
}
.a-student .card .nav-item .active {
  background-color: var(--global-color-1);
}
.a-student .card a {
  color: var(--global-color-1);
}
.a-area {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>