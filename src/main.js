import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";
const app = createApp(App);
import UserService from "./service/userService";
app.use(UserService);
app.use(router).mount("#app");
