// Ref:: https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
import { defineStore } from "pinia";
import { apiDomain } from "~/constants";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
    async handleLogin({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const res: any = await useFetch(`${apiDomain}/api/user/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          username,
          password,
        },
      });

      // console.log("pending", pending);
      // console.log("error", error);

      this.loading = res.pending; // set loading state value to pending

      if (res.data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = res.data?.value?.token; // set token to cookie

        const userInfo = useCookie("userInfo"); // useCookie new hook in nuxt 3
        userInfo.value = res.data?.value?.user; // set user info to cookie

        this.authenticated = true; // set authenticated  state value to true
      }

      return res;
    },
    logUserOut() {
      // clear the token and user info cookies
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      token.value = null; // clear the token cookie
      const userInfo = useCookie("userInfo"); // useCookie new hook in nuxt 3
      userInfo.value = null; // clear the user info cookie

      // set authenticated  state value to false
      this.authenticated = false; // set authenticated  state value to false
    },
  },
  persist: true,
});
