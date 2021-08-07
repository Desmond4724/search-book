<template>
  <div class="login">
    <div class="login__inner">
      <h2>Login</h2>
      <p class="mb-4">
        Please enter your user token
      </p>
      <form @submit.prevent="submit" class="login__form">
        <div class="form-controller">
          <input
            @input="error = null"
            v-model="token"
            maxlength="16"
            placeholder="User token"
            type="text"
            :class="[
              'login__input form-input',
              { 'form-input-invalid': error },
            ]"
          />
          <span class="message message-error">{{ error }}</span>
        </div>
        <v-btn class="w-100" :loading="loading">Login</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import "./style.scss";
import VBtn from "@/components/ui/VBtn/VBtn";
import { login } from "@/repository";

export default {
  components: { VBtn },
  data() {
    return {
      token: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        await login(this.token);
        this.$user.setToken(this.token);
        await this.$router.push({ name: "search" });
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
