<template>
  <button class="btn btn-primary" v-bind="$attrs">
    <slot v-if="!loading"/>
    <span v-else class="clock-loader"/>
  </button>
</template>

<script>
import "./style.scss"
export default {
  name: "VBtn",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  }
};
</script>
