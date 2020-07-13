<template>
  <b-card>
    <h1>
      <font-awesome-icon icon="chalkboard-teacher" style="font-size:20px; margin:auto" />
      <span>Clases</span>
    </h1>
    <b-list-group-item
      href="#"
      class="flex-column align-items-start"
      v-for="clas in classes"
      :key="clas.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ clas.title }}</h5>
        <small>{{ clas.date }}</small>
      </div>

      <p
        class="mb-1"
      >Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>

      <small>Donec id elit non mi porta.</small>
    </b-list-group-item>
  </b-card>
</template>

<script>
export default {
  name: "Videoconference",
  data() {
    return {
      classes: [
        { id: 1, title: "Clase 1", date: "27-Abril-2020" },
        { id: 2, title: "Clase 2", date: "25-Abril-2020" },
        { id: 3, title: "Clase 3", date: "20-Abril-2020" },
        { id: 4, title: "Clase 4", date: "18-Abril-2020" },
        { id: 5, title: "Clase 5", date: "13-Abril-2020" },
        { id: 6, title: "Clase 6", date: "11-Abril-2020" }
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