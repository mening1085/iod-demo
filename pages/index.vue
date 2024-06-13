<script setup>
const slides = ref([
  {
    title: "Publication",
    description: "Corem ipsum dolor sit amet,piscing elit. turxpismolestie.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.5&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Publication",
    description: "Corem ipsum dolor sit amet,piscing elit. turxpismolestie.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.5&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Publication",
    description: "Corem ipsum dolor sit amet,piscing elit. turxpismolestie.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]);

async function getPosts() {
  const posts = await $fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  console.log(posts);
}
</script>

<template>
  <div>
    <AppHero data-aos="fade-up" data-aos-easing="ease-out-cubic" />

    <UContainer
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="500"
    >
      <div>
        <div class="flex items-center gap-3 py-12">
          <div class="basis-1/2">
            <div class="text-6xl">
              Lorem Ipsum availa, majority have suffered ?
            </div>
            <div class="text-md mt-2">Suffered alteration</div>
          </div>
          <div class="basis-1/2">
            <p>
              eu turpis molestie, dictum est a, mattis tellusPorem ipsum dolor
              sit amet, consecteturiameu turpis molestie, dictum est. Corem
              ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
              molestie, dictum est a, mattis tellusconsecteturiameu turpis
              molestie, dictum est. Corem ipsum dolor sit amet.
            </p>
            <div class="flex gap-3 mt-4">
              <div class="basis-1/2">
                <UButton @click="getPosts" block class="py-4">
                  Why join the IoD?
                </UButton>
              </div>
              <div class="basis-1/2">
                <UButton variant="outline" block class="py-4">
                  Register for access
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <div
      class="mb-12"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <!-- <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="(slide, i) in slides" :key="i">
          <div class="carousel__item w-full">
            <div
              class="h-[600px] w-full flex items-end justify-center pb-4 px-6 text-white relative"
            >
              <img
                :src="slide.image"
                alt=""
                class="absolute top-0 w-full h-full brightness-50"
              />

              <div class="relative z-10">
                <div class="text-3xl">Publication</div>
                <div class="text-md font-thin">
                  Corem ipsum dolor sit amet,piscing elit. turxpismolestie.
                </div>
                <nuxt-link
                  to="#"
                  class="flex items-center justify-end font-thin mt-6"
                >
                  <div>See detail</div>
                  <Icon name="bi:arrow-right" class="text-xl ml-2" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel> -->

      <div class="flex items-center py-12 text-white">
        <div
          class="w-[37%] h-[595px] relative flex items-end justify-center pb-4 px-6"
          style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),
              url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.5&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
            background-blend-mode: multiply;
          "
        >
          <div>
            <div class="text-3xl">Publication</div>
            <div class="text-md font-thin">
              Corem ipsum dolor sit amet,piscing elit. turxpismolestie.
            </div>
            <nuxt-link
              to="#"
              class="flex items-center justify-end font-thin mt-6"
            >
              <div>See detail</div>
              <Icon name="bi:arrow-right" class="text-xl ml-2" />
            </nuxt-link>
          </div>
        </div>
        <div
          class="w-[25%] h-[595px] relative flex items-end justify-center pb-4 px-6"
          style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),
              url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.5&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
          "
        >
          <div>
            <div class="text-3xl">Publication</div>
            <div class="text-md font-thin">
              Corem ipsum dolor sit amet,piscing elit. turxpismolestie.
            </div>

            <nuxt-link
              to="#"
              class="flex items-center justify-end font-thin mt-6"
            >
              <div>See detail</div>
              <Icon name="bi:arrow-right" class="text-xl ml-2" />
            </nuxt-link>
          </div>
        </div>
        <div
          class="w-[37%] h-[595px] relative flex items-end justify-center pb-4 px-6"
          style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
              ),
              url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
          "
        >
          <div>
            <div class="text-3xl">Publication</div>
            <div class="text-md font-thin">
              Corem ipsum dolor sit amet,piscing elit. turxpismolestie.
            </div>
            <nuxt-link
              to="#"
              class="flex items-center justify-end font-thin mt-6"
            >
              <div>See detail</div>
              <Icon name="bi:arrow-right" class="text-xl ml-2" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
