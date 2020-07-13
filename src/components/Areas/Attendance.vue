<template>
  <b-card>
    <h1>
      <font-awesome-icon icon="calendar-alt" style="font-size:20px; margin:auto" />
      <span>Listas de asistencia</span>
    </h1>
    <b-list-group-item
      href="#"
      class="flex-column align-items-start"
      v-for="clas in classes"
      :key="clas.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ clas.title }}</h5>
        <small>
          <font-awesome-icon icon="user" style=" margin:auto" />
          {{ clas.attendance }} / {{ clas.totalStudents }}
        </small>
      </div>
    </b-list-group-item>
  </b-card>
</template>

<script>
export default {
  name: "Videoconference",
  data() {
    return {
      classes: [
        {
          id: 1,
          title: "Clase 1",
          totalStudents: 20,
          attendance: 15
        },
        {
          id: 2,
          title: "Clase 2",
          totalStudents: 20,
          attendance: 20
        },
        {
          id: 3,
          title: "Clase 3",
          totalStudents: 20,
          attendance: 15
        },
        {
          id: 4,
          title: "Clase 4",
          totalStudents: 20,
          attendance: 10
        },
        {
          id: 5,
          title: "Clase 5",
          totalStudents: 20,
          attendance: 18
        },
        {
          id: 6,
          title: "Clase 6",
          totalStudents: 20,
          attendance: 20
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 20px;
  margin: 20px;
  color: var(--global-color-1);
}
h1 svg {
  margin-right: 10px !important;
}
</style>