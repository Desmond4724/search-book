<template>
  <ul class="v-pagination">
    <li v-for="(item, index) in paginationItems" :key="index">
      <button @click="onInput(item.text)" :class="{active: item.isActive}" v-if="item.isBtn">{{ item.text }}</button>
      <span v-else>{{item.text}}</span>
    </li>
  </ul>
</template>

<script>
import "./style.scss";
export default {
  name: "VPagination",
  props: {
    length: {
      type: Number,
    },
    modelValue: {
      type: Number,
    },
  },
  methods: {
    onInput(value) {
      if(this.modelValue !== value) {
        this.$emit("update:modelValue", value)
      }
    },
    range(from, to) {
      const range = [];

      from = from > 0 ? from : 1;

      for (let i = from; i <= to; i++) {
        range.push(i);
      }

      return range;
    },
    items() {
      const totalVisible = 10;

      if (totalVisible === 0) {
        return [];
      }
      const maxLength = Math.min(
        Math.max(0, totalVisible) || this.length,
        Math.max(0, 10) || this.length,
        this.length
      );

      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;

      if (this.modelValue > left && this.modelValue < right) {
        const firstItem = 1;
        const lastItem = this.length;
        const start = this.modelValue - left + 2;
        const end = this.modelValue + left - 2 - even;
        const secondItem = start - 1 === firstItem + 1 ? 2 : "...";
        const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : "...";

        return [
          1,
          secondItem,
          ...this.range(start, end),
          beforeLastItem,
          this.length,
        ];
      } else if (this.modelValue === left) {
        const end = this.modelValue + left - 1 - even;
        return [...this.range(1, end), "...", this.length];
      } else if (this.modelValue === right) {
        const start = this.modelValue - left + 1;
        return [1, "...", ...this.range(start, this.length)];
      } else {
        return [
          ...this.range(1, left),
          "...",
          ...this.range(right, this.length),
        ];
      }
    },
  },
  computed: {
    paginationItems() {
      return this.items().map((item) => {
        return {
          isActive: item === this.modelValue,
          text: item,
          isBtn: item !== "...",
        };
      });
    },
  },
  mounted() {
  },
};
</script>
