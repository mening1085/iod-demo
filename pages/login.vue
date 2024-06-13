<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { apiDomain } from "~/constants";

import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const router = useRouter();

const { handleLogin, setLoading, loading } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const schema = object({
  username: string().required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = ref({
  username: "GM00001",
  password: "hq9mnm1f7q",
});
const msgError = ref("");
const isLoading = loading;

const login = async () => {
  setLoading(true); // set loading to true

  const res = await handleLogin(state.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  console.log("authenticated", authenticated.value);
  console.log("res", res);

  if (res?.status.value == "success") {
    router.push("/");
  } else {
    msgError.value = res.error.value.data.message;
  }
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
  console.log(apiDomain);

  try {
    const res = await $fetch(`${apiDomain}/api/user/login`, {
      method: "POST",
      body: JSON.stringify(event.data),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.log(error.response?._data.message);
      msgError.value = error.response?._data.message;
    });
  } catch (error) {
    console.error(error);
  }
}

definePageMeta({
  layout: "auth",
  middleware: "guest",
});
</script>
<template>
  <div class="h-screen w-full flex justify-center items-center auth">
    <div class="bg-white/75 shadow-lg rounded-xl w-[30%] p-6">
      <div class="text-xl text-center">ลงชื่อเข้าใช้</div>
      <div class="mt-4 flex items-center justify-center">
        <div class="w-2/3">
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="login"
          >
            <UFormGroup label="Username" name="email">
              <UInput v-model="state.username" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
              <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <p v-if="msgError" class="text-sm text-red-400">
              {{ msgError }}
            </p>
            <UButton type="submit" block> ลงชื่อเข้าใช้ </UButton>

            <div class="text-center">
              <nuxt-link to="/" class="underline"> กลับหน้าหลัก </nuxt-link>
            </div>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.auth {
  background-image: url("https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
../constants.js
