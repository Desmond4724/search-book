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
      <BookTable @setCategory="setCategory" :items="result.items"></BookTable>
      <v-pagination
        v-if="pageLength > 1"
        @update:modelValue="onChangePage"
        v-model="page"
        :length="pageLength"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import { getBooks } from "@/repository";
import VPagination from "@/components/ui/VPagination/VPagination";
import { parseJsonDataFromGoogle } from "@/service/bookService";
import { ref } from "vue";
import useKeyDown from "@/use/useKeydown";
import BookTable from "@/components/search/BookTable";

export default {
  setup() {
    const searchRefInput = ref(null);
    const focusToSearchInput = (e) => {
      e.preventDefault();
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
  components: { BookTable, VPagination },
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
    setCategory(category) {
      this.query = category;
      this.search();
    },
    async onChangePage() {
      await this.$nextTick();
      await this.getBooks();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    search() {
      this.page = 1;
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
