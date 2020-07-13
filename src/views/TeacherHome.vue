<template>
  <div class="a-teacher">
    <MainNav />
    <b-card class="a-card">
      <b-tabs pills card>
        <b-tab title="Dirección de curso" active>
          <div class="a-area">
            <Area
              v-for="grade in grades"
              :key="grade.id"
              :name="grade.name"
              v-on:clicked="viewGrade(grade.id, grade.name)"
            />
          </div>
        </b-tab>
        <b-tab title="Mis clases">
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
          name: "Matemáticas 4A",
          schedule: [
            { start: 6, end: 7, day: "Lunes" },
            { start: 6, end: 8, day: "Viernes" }
          ]
        },
        {
          id: "2",
          name: "Matemáticas 2",
          schedule: [
            { start: 10, end: 12, day: "Lunes" },
            { start: 8, end: 9, day: "Martes" }
          ]
        },
        {
          id: "3",
          name: "Geometría 6B",
          schedule: [{ start: 6, end: 7, day: "Miércoles" }]
        },
        {
          id: "4",
          name: "Física 8",
          schedule: [
            { start: 9, end: 11, day: "Martes" },
            { start: 7, end: 9, day: "Jueves" }
          ]
        }
      ],
      grades: [{ id: 1, name: "Cuarto A" }]
    };
  },
  methods: {
    viewClass(classId) {
      this.$router.push({ name: "Class", params: { id: classId } });
    },
    viewGrade(gradeId, gradeNm) {
      this.$router.push({
        name: "Grade",
        params: { id: gradeId, name: gradeNm }
      });
    }
  }
};
</script>

<style>
.a-teacher .a-card {
  margin: 5% 10%;
  border-color: transparent;
  border-radius: 0 0 20px 20px;
  -webkit-box-shadow: 5px 8px 15px -2px rgba(122, 122, 122, 1);
  -moz-box-shadow: 5px 8px 15px -2px rgba(122, 122, 122, 1);
  box-shadow: 5px 8px 15px -2px rgba(122, 122, 122, 1);
}
.a-teacher .card .nav-item .active {
  background-color: var(--global-color-1);
}
.a-teacher .card a {
  color: var(--global-color-1);
}
.a-area {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>