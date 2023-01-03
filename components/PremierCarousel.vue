<template>
  <!-- PREMIER MOVIES COMPONENT -->
  <div class="mx-8 my-4 premier-comp">
    <h3 class="my-4 font-bold text-base_t text-[#E6EBF8]">{{ props.title }}</h3>

    <carousel
      :items-to-show="2.5"
      :wrapAround="true"
      :pauseAutoplayOnHover="true"
    >
      <slide v-for="(slide, index) of moviesArr[0]" :key="slide">
        <div
          class="grid w-full h-56 grid-cols-2 grid-rows-6 overflow-hidden rounded-xl place-items-center"
        >
          <img
            :src="`https://www.themoviedb.org/t/p/w440_and_h660_face/${slide.poster_path}`"
            alt=""
            class="object-cover w-full h-full col-start-1 col-end-3 row-start-1 row-end-6"
          />

          <div class="absolute w-4 h-4 like right-4 top-4">
            <Icon
              name="mdi:cards-heart-outline"
              class="absolute top-0 left-0"
              v-if="!toggleLike"
            ></Icon
            ><Icon
              name="mdi:cards-heart"
              class="absolute top-0 left-0 transition-all text-accent"
              v-else
            ></Icon>
          </div>
          <div
            class="z-40 self-end justify-start col-start-2 col-end-3 row-start-1 row-end-7 mb-4"
          >
            <GenreSlide :movie="slide.id"></GenreSlide>
          </div>
          <div
            class="z-20 flex items-end self-end col-start-1 col-end-2 row-start-1 row-end-7 ml-4"
          >
            <div class="flex flex-col items-center stars">
              <div class="flex items-center">
                <p class="text-[#FFC700]">
                  {{ Math.ceil(slide.vote_average / 2) }}
                </p>
                <Icon
                  name="material-symbols:star"
                  class="text-[#FFC700]"
                  size="15px"
                >
                </Icon>
              </div>
              <p class="text-[#FFC700] mx-1">
                ({{ slide.vote_count.toString().slice(0, 2) }})
              </p>
            </div>
            <div class="flex flex-col items-center">
              <Icon name="bxl:imdb" class="text-[#FFC700]" size="30px"> </Icon>
              <p class="text-[#FFC700]">{{ slide.vote_average }}/10</p>
            </div>
            <div
              class="w-full h-full col-start-1 col-end-3 row-start-6 row-end-7 bg-gradient"
            ></div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps({
  movie: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
const toggleLike = ref(false);

const toggleFav = () => {
  toggleLike.value = !toggleLike.value;
};

const moviesArr = ref([]);
const getMovieData = async () => {
  const { data: movies } = await useLazyFetch(
    `http://api.themoviedb.org/3/movie/${props.movie}?api_key=8a91f9a076d5481969b8175b2414651c`
  );
  moviesArr.value.push(movies.value.results);
};
getMovieData();
</script>
<style lang="scss" scoped>
.carousel__slide {
  transform: scale(1);
  margin: 0 13px;
  transition: 0.2s all ease-in-out;
}

.carousel__track .carousel__slide--active {
  transform: scale(1);
  transition: 0.5s all ease-in-out;
}
.bg-gradient {
  background: linear-gradient(
    180deg,
    rgb(30, 30, 30, 1) 0%,
    rgb(30, 30, 30, 1) 100%
  );
  box-shadow: 0px -10px 20px 10px rgba(30, 30, 30, 1);
}
</style>
