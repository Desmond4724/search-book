import { onBeforeUnmount, onMounted } from "vue";

export default function useKeyDown(keys) {
  const keyDown = (e) => {
    keys.forEach((item) => {
      if (item.key === e.key) item.fn(e);
    });
  };

  onMounted(() => {
    window.addEventListener("keydown", keyDown);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("keydown", keyDown);
  });
}
