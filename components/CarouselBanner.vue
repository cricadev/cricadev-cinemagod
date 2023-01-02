<template>
  <div class="mt-4 carousel">
    <carousel
      :items-to-show="1.5"
      :autoplay="5000"
      :wrapAround="true"
      :pauseAutoplayOnHover="true"
    >
      <slide v-for="slide in promoSlides" :key="slide">
        <div
          class="grid items-center justify-center w-full grid-cols-2 grid-rows-4 shadow-2xl rounded-xl place-items-center bg-secondary"
        >
          <img
            :src="slide.img"
            alt=""
            class="object-contain w-full h-full col-span-1 row-span-4"
          />
          <p
            class="col-start-2 col-end-3 row-start-1 row-end-3 font-bold leading-tight -translate-y-1 text-base_t"
          >
            {{ slide.title }}
          </p>
          <p
            class="text-[0.75rem] row-start-1 row-end-3 col-start-2 text-[#e6ebf8] font-medium leading-tight translate-y-6"
          >
            {{ slide.description }}
          </p>
          <a
            v-if="slide.callToAction"
            class="p-2 px-4 bg-accent rounded-lg text-[0.563rem] font-bold flex items-center w-fit row-start-3 row-end-5 col-start-2 col-end-3 mt-2"
            >Learn more
            <Icon name="material-symbols:arrow-forward-ios" size=""></Icon>
          </a>
        </div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
    <div
      class="flex items-center justify-center w-[80%] left-[10%] absolute h-px my-4 bg-text"
    ></div>
  </div>
</template>
<script setup scoped>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const promoSlides = [
  {
    title: "30% off",
    description: "Each monday",
    callToAction: true,
    img: "../image3.png",
  },
  {
    title: "Free Soda",
    description: "For your first purchase",
    callToAction: true,
    img: "../image4.png",
  },
  {
    title: "10% off",
    description: "For your first purchase",
    callToAction: true,
    img: "../image12.png",
  },
];
</script>
<style lang="scss">
$background: #151517;
$secondary: #1e1e1e;
$accent: #0059e0;
$tertiary: #7eb0df;
$inactive: #afafaf;
$text: #eee;
.carousel__pagination {
  padding: 4px;
}
.carousel__pagination-button {
  background-color: $tertiary;
  border-radius: 50%;
  transform: scaleY(1.2) scaleX(0.6);

  &:hover {
    background-color: $accent;
    transition: 0.2s all ease-in;
  }
}
.carousel__pagination-button:hover::after {
  background-color: $accent;
  transition: 0.2s all ease-in;
}
.carousel__pagination-button::after {
  background-color: $tertiary;
  border-radius: 50%;
  &:hover {
    background-color: $accent;
    transition: 0.2s all ease-in;
  }
}
.carousel__pagination-button--active {
  background-color: $accent;
  transform: scaleY(1.4) scaleX(0.8);

  border-radius: 50%;
}
.carousel__pagination-button--active::after {
  background-color: $accent;
  border-radius: 50%;
}
.carousel__slide {
  transform: scale(0.8);
  transition: 0.2s all ease-in-out;
}

.carousel__track .carousel__slide--active {
  transform: scale(1);
  transition: 0.5s all ease-in-out;
}
</style>
