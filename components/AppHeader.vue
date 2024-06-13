<script setup lang="ts">
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { logUserOut, authenticated } = useAuthStore(); // use authenticateUser action from  auth store
// const { user } = storeToRefs(useAuthStore());
const userInfo = useCookie("userInfo");
const router = useRouter();
const menu = ref([
  {
    title: "หลักสูตร",
    link: "/courses",
  },
  {
    title: "กิจกรรม",
    link: "/activities",
  },
  {
    title: "ESG Resource",
    link: "/esg-resources",
  },
  {
    title: "การประเมินและรางวัล",
    link: "/assessment-awards",
  },
  {
    title: "CAC",
    link: "/cac",
  },
  {
    title: "เกี่ยวกับ IOD",
    link: "/about",
  },
]);

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>

<template>
  <div class="px-16 py-3">
    <div class="flex justify-between">
      <NuxtLink to="/">
        <img width="70" height="100%" src="/assets/logo-iod.png" alt="" />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <UButton
          v-for="item in menu"
          :key="item.title"
          :to="item.link"
          class="hover:text-black text-[#2D3956]"
          variant="link"
        >
          <div class="text-[16px]">
            {{ item.title }}
          </div>
        </UButton>

        <Icon class="w-6 h-6" name="mdi:account-circle" color="#2D3956" />
        <NuxtLink to="/login" class="" v-if="!userInfo">
          ลงชื่อเข้าใช้
        </NuxtLink>
        <div v-else>
          {{ userInfo?.username }}
        </div>

        <div class="flex items-center border-l border-gray-500 pl-2 gap-2">
          <img width="36" height="28" src="/assets/th.png" alt="" />
          <div class="text-gray-400">TH</div>
        </div>

        <UButton v-if="userInfo" @click="logout">logout</UButton>
      </div>
    </div>
  </div>
</template>
