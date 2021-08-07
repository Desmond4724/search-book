class User {
  constructor() {
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }
}

export const user = new User();

export default {
  install(app) {
    app.config.globalProperties.$user = user;
  },
};
