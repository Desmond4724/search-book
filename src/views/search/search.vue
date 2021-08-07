<template>
  <div class="search">
    <div class="linear-activity" v-show="loading">
      <div class="indeterminate"></div>
    </div>
    <div class="search__wrapper">
      <div class="search__inner">
        <div class="search__input__wrapper">
          <input
            @input="search"
            v-model="query"
            placeholder="Search"
            type="text"
            class="search__input"
          />
        </div>
        <div class="search__table__wrapper">
          <table class="search__table">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author of the book</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in result.items" :key="row.id">
                <td class="search__table__cell-img">
                  <img
                    v-if="row.volumeInfo.imageLinks.smallThumbnail"
                    class="search__table__img"
                    :src="row.volumeInfo.imageLinks.smallThumbnail"
                    alt=""
                  />
                </td>
                <td>{{ row.volumeInfo.title }}</td>
                <td>
                  <span v-if="row.volumeInfo.authors">{{
                    row.volumeInfo.authors.join(", ")
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <v-pagination
          v-if="pageLength > 1"
          @update:modelValue="onChangePage"
          v-model="page"
          :length="pageLength"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import { getBooks } from "@/repository";
import VPagination from "@/components/ui/VPagination/VPagination";

export default {
  components: { VPagination },
  data() {
    return {
      query: null,
      pageLength: 0,
      params: {
        maxResults: 10,
      },
      page: 1,
      loading: false,
      result: {
        items: [],
      },
    };
  },
  methods: {
    async onChangePage() {
      await this.$nextTick();
      await this.getBooks();
    },
    search() {
      this.getBooks();
    },

    async getBooks() {
      this.loading = true;
      const { maxResults } = this.params;
      try {
        let params = {
          q: this.query,
          maxResults,
        };
        params.startIndex = (this.page - 1) * maxResults;

        this.result = await getBooks(params);
        this.pageLength = Math.ceil(this.result.totalItems / maxResults);
      } catch (e) {
        console.error(e);
        // todo need to handle the error and show to user
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getBooks()
  },
};
</script>
