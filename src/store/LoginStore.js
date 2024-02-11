import { defineStore } from "pinia";

export const LoginStore = defineStore({
  id: "login_store",
  persist: true,
  state: () => {
    return {
      isLogin: false,
    };
  },
  actions: {
    setLogin(value) {
      this.isLogin = value;
    }, 
  },
});
