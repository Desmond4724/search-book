<template>
  <div class="search">
    <div class="linear-activity" v-show="loading">
      <div class="indeterminate"></div>
    </div>
    <div class="search__inner">
      <div class="search__input__wrapper">
        <input
          ref="searchRefInput"
          @input="search"
          v-model="query"
          placeholder="Search pres(/)"
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
            <tr
              @click="$refs.bookDetailsDialogRef.open(row)"
              v-for="row in result.items"
              :key="row.id"
            >
              <td class="search__table__cell-img">
                <img
                  v-if="row.images.small"
                  class="search__table__img"
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
  <BookDetailsDialog ref="bookDetailsDialogRef"></BookDetailsDialog>
</template>

<script>
import "./style.scss";
import { getBooks } from "@/repository";
import VPagination from "@/components/ui/VPagination/VPagination";
import { parseJsonDataFromGoogle } from "@/service/bookService";
import BookDetailsDialog from "@/components/search/BookDetailsDialog";
import { ref } from "vue";
import useKeyDown from "@/use/useKeydown";

export default {
  setup() {
    const searchRefInput = ref(null);
    const focusToSearchInput = () => {
      setTimeout(() => {
        searchRefInput.value.focus();
      });
    };
    useKeyDown([
      {
        key: "/",
        fn: focusToSearchInput,
      },
    ]);
    return {
      searchRefInput,
    };
  },
  components: { BookDetailsDialog, VPagination },
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    search() {
      this.page = 1
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
        let result = parseJsonDataFromGoogle(await getBooks(params));
        this.pageLength = Math.ceil(result.totalItems / maxResults);
        this.result = result;
      } catch (e) {
        console.error(e);
        // todo need to handle the error and show to user
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getBooks();
  },
};
</script>
