<template>
  <div class="">
    <div class="menu-nav">
      <div class="burger-menu">
        <div class="fixed z-10 px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
          <Icon name="mdi:menu" @click="openNav"></Icon>
        </div>
      </div>
      <nav class="nav">
        <div
          class="fixed top-0 left-0 w-full h-full nav bg-[#000] opacity-50 menu z-20"
          v-if="toggleNav"
          @click="openNav"
        ></div>
        <div
          v-if="toggleNav"
          class="nav bg-background w-[70%] h-full z-40 fixed top-0 left-0 menu"
        >
          <div class="fixed z-20 p-3 rounded-xl left-4 top-8 bg-secondary">
            <Icon name="mdi:close" @click="openNav" size="20px"></Icon>
          </div>
          <div class="relative left-2 user-card top-8">
            <div class="flex items-center justify-center gap-2">
              <div class="avatar">
                <img src="../public/avatar.png" alt="" class="h-full w-9" />
              </div>
              <div class="user-info">
                <p
                  class="justify-center font-light leading-normal tracking-wide text-end text-sm_m"
                >
                  🤞 Hey,
                  <br />
                  <span class="font-medium">Louis!</span>
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative z-20 flex flex-col items-center justify-center gap-4 mx-4 mt-24 buttons"
          >
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="mdi:cards-heart-outline" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Favorites</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="tabler:message" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Notifications</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="mingcute:sale-line" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]"
                  >Loyalty card and points</span
                >
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon
                  name="material-symbols:settings-outline"
                  size="14px"
                ></Icon>
                <span class="font-semibold text-[0.75rem]">Settings</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <div
              class="flex items-center justify-center w-full h-px my-6 bg-text"
            ></div>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="material-symbols:person-outline" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Profile</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-[#B24C63]"
            >
              <div class="flex items-center gap-2">
                <Icon name="mingcute:exit-line" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Logout</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
          </div>
        </div>
      </nav>
      <nav class="nav">
        <div
          class="fixed top-0 left-0 w-full h-full nav bg-[#000] opacity-50 z-20 antimenu"
          v-if="!toggleNav"
          @click="openNav"
        ></div>
        <div
          v-if="!toggleNav"
          class="nav bg-background w-[70%] h-full z-20 fixed top-0 left-0 antimenu"
        >
          <div class="fixed z-20 p-3 rounded-xl left-4 top-8 bg-secondary">
            <Icon name="mdi:close" @click="openNav" size="20px"></Icon>
          </div>
          <div class="relative left-2 user-card top-8">
            <div class="flex items-center justify-center gap-2">
              <div class="avatar">
                <img src="../public/avatar.png" alt="" class="h-full w-9" />
              </div>
              <div class="user-info">
                <p
                  class="justify-center font-light leading-normal tracking-wide text-end text-sm_m"
                >
                  🤞 Hey,
                  <br />
                  <span class="font-medium">Louis!</span>
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative z-20 flex flex-col items-center justify-center gap-4 mx-4 mt-24 buttons"
          >
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="mdi:cards-heart-outline" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Favorites</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="tabler:message" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Notifications</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="mingcute:sale-line" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]"
                  >Loyalty card and points</span
                >
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon
                  name="material-symbols:settings-outline"
                  size="14px"
                ></Icon>
                <span class="font-semibold text-[0.75rem]">Settings</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <div
              class="flex items-center justify-center w-full h-px my-6 bg-text"
            ></div>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-accent"
            >
              <div class="flex items-center gap-2">
                <Icon name="material-symbols:person-outline" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Profile</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
            <button
              class="flex items-center justify-between w-full gap-4 p-4 transition-all rounded-lg shadow-xl bg-secondary hover:bg-[#B24C63]"
            >
              <div class="flex items-center gap-2">
                <Icon name="mingcute:exit-line" size="14px"></Icon>
                <span class="font-semibold text-[0.75rem]">Logout</span>
              </div>
              <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                size="8px"
              ></Icon>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <div class="ticket">
      <div
        class="fixed z-10 px-4 py-3 shadow-2xl ticket-btn bg-secondary rounded-xl right-8 top-8"
        @click="openModal"
      >
        <Icon name="mdi:ticket-confirmation"></Icon>
      </div>
      <div class="z-50 menu bg-background menu-style" v-if="toggle">
        <div class="navigation-tickets">
          <div class="goback">
            <div class="fixed px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
              <Icon name="mdi:arrow-left" @click="openModal"></Icon>
            </div>
          </div>
          <div
            class="fixed flex items-center justify-center gap-4 your-tickets top-11 left-24"
          >
            <div class="">
              <Icon name="mdi:ticket-confirmation" size="24px"></Icon>
            </div>
            <span class="font-semibold text-sm_m">Your tickets</span>
          </div>
        </div>
      </div>
      <div class="antimenu bg-background menu-style" v-if="!toggle">
        <div class="navigation-tickets">
          <div class="goback">
            <div class="fixed px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
              <Icon name="mdi:arrow-left" @click="openModal"></Icon>
            </div>
          </div>
          <div
            class="fixed flex items-center justify-center gap-4 your-tickets top-11 left-24"
          >
            <div class="">
              <Icon name="mdi:ticket-confirmation" size="24px"></Icon>
            </div>
            <span class="font-semibold text-sm_m">Your tickets</span>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-text">
      <p
        class="absolute font-light leading-normal tracking-wide text-sm_m top-8 left-24"
      >
        🤞 Hey,
        <br />
        <span class="font-medium">Louis!</span>
      </p>
    </div>
    <div class="progress-user">
      <div
        class="relative flex items-center justify-center px-8 py-4 mx-8 rounded-lg shadow-xl mt-28 progress-banner bg-secondary text-end"
      >
        <div class="container">
          <div class="circular-progress">
            <span class="progress-value">0%</span>
          </div>
        </div>

        <p class="text-[0.75rem]">
          🎉 <strong class="font-medium">50% off</strong> on your first combo
        </p>
      </div>
    </div>
    <CarouselBanner></CarouselBanner>
    <!--SEARCH AND TAG SYSTEM-->
    <div
      class="search-and-tag-system grid grid-cols-[25%_65%] grid-rows-1 h-16 ml-4 mt-8"
    >
      <div class="w-full h-full search-container place-self-center">
        <form action="/search" method="get" class="w-full">
          <input
            class="search"
            id="searchleft"
            type="search"
            name="q"
            placeholder="Search"
            @keyup.enter="search"
          />
          <label class="rounded-lg button searchbutton" for="searchleft"
            ><span class="mglass">&#9906;</span></label
          >
        </form>
      </div>

      <Tags></Tags>
    </div>
    <!--SUGGEST movies COMPONENT-->
    <div class="mx-8 my-4 suggest-comp">
      <h3 class="my-4 font-bold text-base_m text-[#E6EBF8]">Suggest</h3>
      <carousel
        :items-to-show="1"
        :wrapAround="true"
        :autoplay="5000"
        :pauseAutoplayOnHover="true"
      >
        <slide v-for="(slide, index) of popular.results" :key="slide.id">
          <div
            class="grid w-full h-56 grid-cols-5 grid-rows-5 overflow-hidden rounded-xl place-items-center"
          >
            <img
              :src="`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${slide.backdrop_path}`"
              alt=""
              class="object-cover w-full h-full col-start-1 col-end-7 row-start-1 row-end-7"
            />

            <div class="absolute w-4 h-4 like right-4 top-4" @click="toggleFav">
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
              class="z-20 grid self-center col-start-1 col-end-3 row-start-3 row-end-5"
            >
              <LogoSlide :movie="slide.id" class=""></LogoSlide>
            </div>
            <div class="z-20 outer">
              <TrailerSlide :movie="slide.id"></TrailerSlide>
            </div>
            <div
              class="z-20 flex flex-col col-start-1 col-end-3 row-start-5 row-end-6 ml-4 justify-self-start"
            >
              <div class="flex items-center gap-px stars">
                <Icon
                  name="material-symbols:star"
                  class="text-[#FFC700]"
                  size="15px"
                >
                </Icon>
                <Icon
                  name="material-symbols:star"
                  class="text-[#FFC700]"
                  size="15px"
                >
                </Icon>
                <Icon
                  name="material-symbols:star"
                  class="text-[#FFC700]"
                  size="15px"
                >
                </Icon>
                <Icon
                  name="material-symbols:star"
                  class="text-[#FFC700]"
                  size="15px"
                >
                </Icon>
                <Icon
                  name="material-symbols:star"
                  class="text-[#FFC700]"
                  size="15px"
                >
                </Icon>
                <p class="text-[#FFC700] mx-1">({{ slide.vote_count }})</p>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="bxl:imdb" class="text-[#FFC700]" size="30px">
                </Icon>
                <p class="text-[#FFC700]">{{ slide.vote_average }}/10</p>
              </div>
            </div>
            <div
              class="z-20 flex self-center col-start-3 col-end-5 row-start-5 row-end-6 gap-2"
            >
              <GenreSlide :movie="slide.id" :show-actor="true"></GenreSlide>
            </div>

            <div
              class="absolute bottom-0 left-0 w-full bg-gradient h-1/2"
            ></div>
          </div>
        </slide>

        <template #addons> </template>
      </carousel>
    </div>

    <!-- PREMIER COMP-->
    <PremierCarousel title="Premiere" movie="now_playing"></PremierCarousel>
    <PremierCarousel
      title="People's Favorite"
      movie="top_rated"
    ></PremierCarousel>
    <CreditsComp></CreditsComp>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
useHead({
  title: "Home",
  titleTemplate: (title) => `${title} | CinemaGod`,

  meta: [
    {
      property: "og:title",
      content: "Home | CinemaGod",
    },
    {
      property: "og:type",
      content: "",
    },
    {
      property: "og:description",
      content:
        "Welcome to CinemaGod a movie ticket app where you will find every movie ever.",
    },

    {
      property: "og:url",
      content: `https://cinemagod.cricadev.com/home`,
    },

    {
      property: "og:site_name",
      content: "cinemagod",
    },
    {
      property: "twitter:title",
      content: "Home | CinemaGod",
    },
    {
      hid: "description",
      name: "description",
      content:
        "Welcome to CinemaGod a movie ticket app where you will find every movie ever.",
    },
    {
      hid: "robots",
      name: "robots",
      content: "index, follow",
    },
    {
      rel: "cannonical",
      href: `https://cinemagod.cricadev.com/home`,
    },
  ],
});
const toggleLike = ref(false);

const toggleFav = () => {
  toggleLike.value = !toggleLike.value;
};
const toggle = ref(false);
const toggleNav = ref(false);
const openModal = () => {
  toggle.value = !toggle.value;
};
const openNav = () => {
  toggleNav.value = !toggleNav.value;
};

onMounted(() => {
  let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

  let progressStartValue = 0,
    progressEndValue = 90,
    speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#0059e0  ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
});

const { data: popular } = await useLazyFetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=8a91f9a076d5481969b8175b2414651c&language=en-US&page=1"
);
</script>
<style lang="scss">
$background: #151517;
$secondary: #1e1e1e;
$accent: #0059e0;
$tertiary: #7eb0df;
$inactive: #afafaf;
$text: #eee;
body {
  overflow-y: auto;
}
.bg-gradient {
  background: linear-gradient(
    180deg,
    rgb(30, 30, 30, 1) 0%,
    rgb(30, 30, 30, 1) 100%
  );
  box-shadow: 0px -10px 20px 10px rgba(30, 30, 30, 1);
}
.menu-style {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;
}
.menu {
  transform: translateX(100%);
  animation: menutoggle 0.5s ease-in-out forwards;
  @keyframes menutoggle {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
}
.antimenu {
  animation: antimenu 0.5s ease-in-out forwards;
  @keyframes antimenu {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
.container {
  width: 50px;
}
.circular-progress {
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: conic-gradient($accent 3.6deg, #ededed 0deg);
  display: flex;
  align-items: center;
  justify-content: center;
}
.circular-progress::before {
  content: "";
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: $secondary;
}
.progress-value {
  position: relative;
  font-size: 10px;
  font-weight: 600;
  color: $text;
}
.text {
  font-size: 30px;
  font-weight: 300;
  color: #fff;
}
.button {
  background-color: $accent;

  font-size: 14px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 0.2s all ease-in-out;
}

.button:hover {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: white;
  color: $accent;
  outline-width: 5px;
  outline-color: $accent;
}

.search-container {
  position: relative;
  display: inline-block;
  margin: 4px 2px;
  height: 50px;
  width: 50px;
  vertical-align: bottom;
}

.mglass {
  display: inline-block;
  pointer-events: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

.searchbutton {
  position: absolute;
  font-size: 22px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: white;
  color: $accent;
  border-radius: 10px 0% 0% 10px;
}

.search {
  color: $accent;

  position: absolute;
  left: 49px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
  background-color: white;
  outline: none;
  border: none;
  padding: 0;
  width: 0;
  height: 100%;
  z-index: 10;
  border-radius: 0% 10px 10px 0%;

  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
}
.search::placeholder {
  color: $accent;
}

.search:focus {
  /* Bar width+1px */
  width: 68vw;
  margin-right: 8px;
  border: 4px $accent;
}

.expandright {
  left: auto;
  right: 49px; /* Button width-1px */
}

.expandright:focus {
  padding: 0 0 0 16px;
}
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  height: 200px;
  width: 100%;

  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
}

/* Style the back side */
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
