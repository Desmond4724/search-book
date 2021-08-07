<template>
  <table class="book-table">
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Author of the book</th>
      </tr>
    </thead>
    <tbody v-if="items.length">
      <tr
        @click="$refs.bookDetailsDialogRef.open(row)"
        v-for="row in items"
        :key="row.id"
      >
        <td class="book-table__cell-img">
          <img
            v-if="row.images.small"
            class="book-table__img"
            :src="row.images.small"
            alt=""
          />
        </td>
        <td>{{ row.title }}</td>
        <td>
          {{ row.authors }}
        </td>
      </tr>
    </tbody>
    <tbody>
    <tr>
      <td colspan="3">No books</td>
    </tr>
    </tbody>
  </table>
  <BookDetailsDialog ref="bookDetailsDialogRef"></BookDetailsDialog>
</template>

<script>
import BookDetailsDialog from "@/components/search/BookDetailsDialog";

import "./book-table.scss";

export default {
  name: "BookTable",
  components: {
    BookDetailsDialog
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
