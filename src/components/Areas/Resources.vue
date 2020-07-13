<template>
  <b-card>
    <h1>
      <font-awesome-icon icon="folder" style="font-size:20px; margin:auto" />
      <span>Recursos</span>
    </h1>
    <b-list-group-item
      href="#"
      class="flex-column align-items-start"
      v-for="resource in resources"
      :key="resource.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">
          <font-awesome-icon
            v-if="resource.type == 'video'"
            icon="file-video"
            style="font-size:20px; margin:auto"
          />
          <font-awesome-icon
            v-if="resource.type == 'image'"
            icon="file-image"
            style="font-size:20px; margin:auto"
          />
          <font-awesome-icon
            v-if="resource.type == 'pdf'"
            icon="file-pdf"
            style="font-size:20px; margin:auto"
          />
          {{ resource.title }}
        </h5>
        <small>{{ resource.date }}</small>
      </div>

      <p
        class="mb-1"
      >Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    </b-list-group-item>
  </b-card>
</template>

<script>
export default {
  name: "Resources",
  data() {
    return {
      resources: [
        { id: 1, title: "Recurso 1", date: "27-Abril-2020", type: "video" },
        { id: 2, title: "Recurso 2", date: "25-Abril-2020", type: "image" },
        { id: 3, title: "Recurso 3", date: "20-Abril-2020", type: "pdf" },
        { id: 4, title: "Recurso 4", date: "18-Abril-2020", type: "video" },
        { id: 5, title: "Recurso 5", date: "13-Abril-2020", type: "pdf" },
        { id: 6, title: "Recurso 6", date: "11-Abril-2020", type: "image" }
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