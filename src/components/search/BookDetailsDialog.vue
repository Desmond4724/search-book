<template>
  <v-dialog @update:modelValue="details = null" :model-value="!!details">
    <h3 class="book-details__title">{{ details.title }}</h3>
    <h4>by {{ details.authors }}</h4>

    <div class="text-center">
      <img :src="details.images.normal" alt="" />
    </div>
    <div class="book-details__tag">
      <a
        class="book-details__tag__item"
        href=""
        @click.prevent="onClickTag(category)"
        :key="`category-${index}`"
        v-for="(category, index) in details.categories"
        >#{{ category }}</a
      >
    </div>
    <p>{{ details.description }}</p>
  </v-dialog>
</template>

<script>
import "./book-details-dialog.scss";
import VDialog from "@/components/ui/VDialog/VDilog";

export default {
  name: "BookDetailsDialog",
  emits: {
    setCategory: (category) => {
      return !!category;
    },
  },
  components: { VDialog },
  data() {
    return {
      details: null,
    };
  },
  methods: {
    open(details) {
      this.details = details;
    },
    onClickTag(category) {
      this.$emit("setCategory", category);
      this.details = null;
    },
  },
};
</script>
