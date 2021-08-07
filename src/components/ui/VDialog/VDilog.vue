<template>
  <teleport to="body" v-if="modelValue">
    <div class="v-dialog">
      <div class="v-dialog__backdrop" @click="close"></div>
      <div class="v-dialog__container">
        <button @click="close" class="v-dialog__closer">&times;</button>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script>
import "./style.scss";
import useKeyDown from "@/use/useKeydown";
export default {
  name: "VDialog",
  setup(props, { emit }) {
    const close = () => {
      emit("update:modelValue", false);
    };

    useKeyDown([
      {
        key: "Escape",
        fn: close,
      },
    ]);

    return {
      close,
    };
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
