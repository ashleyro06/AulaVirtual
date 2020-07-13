<template>
  <b-card>
    <h1 class="a-title">
      <font-awesome-icon icon="chalkboard-teacher" style="font-size:20px; margin:auto" />
      <span>Asignaturas</span>
    </h1>

    <b-button variant="primary" block class="a-button-new">Nueva</b-button>

    <b-list-group-item
      href="#"
      class="flex-column align-items-start"
      v-for="person in people"
      :key="person.id"
    >
      <div class="d-flex w-100 justify-content-between">
        <div class="d-flex w-100 a-people">
          <b-avatar :text="person.short" size="2em" class="a-avatar"></b-avatar>
          <h5 class="mb-1">{{ person.name }}</h5>
        </div>
        <b-button variant="light">
          <font-awesome-icon icon="trash-alt" style="font-size:20px; margin:auto; color: red" />
        </b-button>
      </div>
    </b-list-group-item>
  </b-card>
</template>

<script>
export default {
  name: "PeopleList",
  props: {
    people: Array
  }
};
</script>

<style scoped>
.a-title {
  /* display: flex; */
  text-align: center;
  font-size: 20px;
  margin: 20px;
  margin-bottom: 40px;
  color: var(--global-color-1);
}
.a-title svg {
  margin-right: 10px !important;
}

.a-people {
  display: flex;
  align-items: center;
}

.a-people .a-avatar {
  margin: 10px;
  background-color: var(--global-color-1);
}

.a-button-new{
    background-color: var(--global-color-1);
    margin-bottom: 40px;
}
</style>