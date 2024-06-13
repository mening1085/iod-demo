<script setup lang="ts">
const colorMode = useColorMode();
onMounted(() => {
  if (colorMode.preference === "system" || colorMode.preference === "dark") {
    colorMode.preference = "light";
  }
});
</script>

<template>
  <!-- <div class="fixed bottom-16 right-5 z-50">
    <div v-if="$colorMode.preference === 'system'">
      <Icon
        class="bg-transparent rounded-full w-5 h-5 cursor-pointer"
        @click="$colorMode.preference = 'light'"
        name="material-symbols:light-mode"
        color="white"
      />
    </div>
    <div v-else>
      <Icon
        v-if="$colorMode.preference === 'dark'"
        class="bg-transparent rounded-full w-5 h-5 cursor-pointer"
        @click="$colorMode.preference = 'light'"
        name="material-symbols:light-mode"
        color="white"
      />

      <Icon
        v-else
        @click="$colorMode.preference = 'dark'"
        class="bg-transparent rounded-full w-5 h-5 cursor-pointer"
        name="material-symbols:dark-mode"
        color="black"
      />
    </div>
  </div> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.content {
  min-height: calc(100vh - 64px - 64px);
}
</style>
