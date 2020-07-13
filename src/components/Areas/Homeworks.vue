<template>
  <b-card>
    <h1>
      <font-awesome-icon icon="file-alt" style="font-size:20px; margin:auto" />
      <span>Tareas</span>
    </h1>
    <b-list-group-item
      href="#"
      class="flex-column align-items-start"
      v-for="homework in homeworks"
      :key="homework.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ homework.title }}</h5>
        <small>
          Entregado:
          <font-awesome-icon
            v-if="homework.done"
            icon="check"
            style="font-size:20px; margin:auto; color:green"
          />
          <font-awesome-icon
            v-if="!homework.done"
            icon="times"
            style="font-size:20px; margin:auto; color:red"
          />
        </small>
      </div>
      <small>Recurso relacionado: {{ homework.resource }}</small>
      <br />
      <small style="color: red">Vencimiento: {{ homework.date }}</small>
    </b-list-group-item>
  </b-card>
</template>

<script>
export default {
  name: "Homeworks",
  data() {
    return {
      homeworks: [
        {
          id: 1,
          title: "Tarea 1",
          date: "27-Abril-2020",
          resource: "Recurso 1",
          done: true
        },
        {
          id: 2,
          title: "Tarea 2",
          date: "25-Abril-2020",
          resource: "Recurso 4",
          done: true
        },
        {
          id: 3,
          title: "Tarea 3",
          date: "20-Abril-2020",
          resource: "Recurso 5",
          done: false
        },
        {
          id: 4,
          title: "Tarea 4",
          date: "18-Abril-2020",
          resource: "Recurso 2",
          done: true
        },
        {
          id: 5,
          title: "Tarea 5",
          date: "13-Abril-2020",
          resource: "Recurso 6",
          done: false
        },
        {
          id: 6,
          title: "Tarea 6",
          date: "11-Abril-2020",
          resource: "Recurso 3",
          done: false
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
</style>