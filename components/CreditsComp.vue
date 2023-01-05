<template>
  <div class="mx-8 mt-8 mb-144">
    <h3 class="my-4 font-bold text-base_t text-[#E6EBF8]">
      Top 3 people's favorite celeb
    </h3>
    <div class="flex items-center gap-2">
      <Icon
        name="material-symbols:how-to-vote"
        class="text-accent"
        size="25px"
      ></Icon>
      <span class="flex items-center gap-2 fade-in" v-if="!togglePop">
        Vote for your favorite one
      </span>
      <span class="flex items-center gap-2 fade-in text-[#FFC700]" v-else>
        You have voted
      </span>
    </div>
    <carousel
      :items-to-show="3"
      :wrapAround="true"
      :pauseAutoplayOnHover="true"
      class="my-4"
    >
      <slide v-for="celeb in favCelebArr[0]" :key="celeb">
        <div
          class="relative grid w-40 h-40 grid-cols-2 grid-rows-6 py-2 place-items-center"
          @click="showPop"
        >
          <img
            :src="`https://www.themoviedb.org/t/p/w440_and_h660_face/${celeb.profile_path}`"
            alt=""
            class="object-cover w-full h-full col-start-1 col-end-3 row-start-1 row-end-5 rounded-full"
          />
          <p
            class="relative z-10 flex flex-col items-center self-start justify-center col-start-1 col-end-3 row-start-5 row-end-7 p-2 text-center -translate-y-2 rounded-lg text-text bg-accent"
          >
            {{ celeb.name }}
          </p>
          <span
            v-if="togglePop"
            class="z-10 flex items-center col-start-1 col-end-3 row-start-1 row-end-2 gap-1 p-2 -translate-y-6 rounded-lg text-text bg-accent fade-in"
          >
            <Icon name="mdi:people-group" class="text-text" size="25px"></Icon>

            {{ Math.ceil(celeb.popularity) }}
          </span>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const togglePop = ref(false);
const showPop = () => {
  togglePop.value = !togglePop.value;
};
const favCelebArr = ref([]);
const getLogoData = async () => {
  const { data: people } = await useLazyFetch(
    `http://api.themoviedb.org/3/person/popular?api_key=8a91f9a076d5481969b8175b2414651c`
  );

  favCelebArr.value.push(people.value.results);
};
getLogoData();
</script>
<style lang="scss" scoped>
.fade-in {
  animation: fadeIn ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
.carousel__slide {
  transform: scale(1);
  margin: 0 5px;
  padding: 25px 0;
  transition: 0.2s all ease-in-out;
}

.carousel__track .carousel__slide--active {
  transform: scale(1);
  transition: 0.5s all ease-in-out;
  margin: 0 5px;
}
</style>
