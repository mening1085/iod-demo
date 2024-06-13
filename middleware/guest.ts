export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token"); // get token from cookies

  if (token.value && to?.name === "login") {
    return navigateTo("/");
  }
});
