<template>
  <b-card no-body @click="$emit('clicked')">
    <RImage />
    <h5>{{ name }}</h5>
  </b-card>
</template>

<script>
import RImage from "@/components/General/RandomImage";
export default {
  props: {
    name: String,
    id: String
  },
  components: {
    RImage
  }
};
</script>

<style>
.a-area .card {
  width: 300px;
  margin: 10px !important;
  cursor: pointer;
}

.a-area .card h5 {
  color: var(--global-color-1);
  text-align: center;
  margin: 20px 0;
}
</style>