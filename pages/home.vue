<template>
  <div class="">
    <div class="menu-nav">
      <div class="burger-menu">
        <div class="fixed px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
          <Icon name="mdi:menu" @click="openNav"></Icon>
        </div>
      </div>
      <nav class="nav">
        <div
          class="fixed top-0 left-0 w-full h-full nav bg-[#000] opacity-50 z-10 menu"
          v-if="toggleNav"
          @click="openNav"
        ></div>
        <div
          v-if="toggleNav"
          class="nav bg-background w-[70%] h-full z-20 fixed top-0 left-0 menu"
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
          class="fixed top-0 left-0 w-full h-full nav bg-[#000] opacity-50 z-10 antimenu"
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
        class="fixed px-4 py-3 shadow-2xl ticket-btn bg-secondary rounded-xl right-8 top-8"
        @click="openModal"
      >
        <Icon name="mdi:ticket-confirmation"></Icon>
      </div>
      <div class="menu bg-background menu-style" v-if="toggle">
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
        <!-- <div class="grid h-full grid-flow-row overflow-auto">
          <div class="card" v-for="(index, item) of movies.results">
            <h1>{{ index.original_title }}</h1>
            <img
              :src="`https://www.themoviedb.org/t/p/w440_and_h660_face/${index.poster_path}`"
              alt=""
            />
          </div>
        </div>-->
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
        <!--   <div class="grid h-full grid-flow-row overflow-auto">
          <div class="card" v-for="(index, item) of movies.results">
            <h1>{{ index.original_title }}</h1>
            <img
              :src="`https://www.themoviedb.org/t/p/w440_and_h660_face/${index.poster_path}`"
              alt=""
            />
          </div>
        </div>-->
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
    <div class="mt-12 carousel">
      <carousel
        :items-to-show="1.5"
        autoplay="2000"
        wrapAround="true"
        pauseAutoplayOnHover="true"
      >
        <slide v-for="slide in promoSlides" :key="slide">
          <div
            class="grid items-center justify-center w-full h-48 grid-cols-2 grid-rows-4 rounded-lg shadow-2xl place-items-center bg-secondary"
          >
            <img
              :src="slide.img"
              alt=""
              class="object-contain w-full h-full col-span-1 row-span-4"
            />
            <p
              class="col-start-2 col-end-3 row-start-1 row-end-2 font-bold text-base_t"
            >
              {{ slide.title }}
            </p>
            <p class="text-[0.75rem] row-start-2 row-end-4 col-start-2">
              {{ slide.description }}
            </p>
            <a
              v-if="slide.callToAction"
              class="p-2 px-4 bg-accent rounded-lg text-[0.563rem] font-bold flex items-center w-fit"
              >Learn more
              <Icon name="material-symbols:arrow-forward-ios" size=""></Icon>
            </a>
          </div>
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const promoSlides = [
  {
    title: "New Releases",
    description:
      "Check out our latest blockbusters now showing on the big screen!",
    callToAction: true,
    img: "../image3.png",
  },
  {
    title: "Concessions Specials",
    description:
      "Enjoy discounted snacks and drinks during our weekday matinees.",
    callToAction: true,
    img: "../image4.png",
  },
  {
    title: "Membership Rewards",
    description:
      "Sign up for a membership and earn points towards free tickets and concessions!",
    callToAction: true,
    img: "../image12.png",
  },
];

onBeforeMount(async () => {
  const { data: movies } = await useLazyFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=1a2b3c4d5e6f7g8h9i0j&language=en-US&page=1"
  );
  console.log(movies);
});
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

const toggle = ref(false);
const toggleNav = ref(false);
const openModal = () => {
  toggle.value = !toggle.value;
};
const openNav = () => {
  toggleNav.value = !toggleNav.value;
};
const { data: movies } = await useLazyFetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=8a91f9a076d5481969b8175b2414651c&language=en-US&page=1"
);

//parse fetched data to object
</script>
<style lang="scss">
$background: #151517;
$secondary: #1e1e1e;
$accent: #0059e0;
$tertiary: #7eb0df;
$inactive: #afafaf;
$text: #eee;
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
.carousel__pagination {
  padding: 4px;
}
.carousel__pagination-button {
  background-color: $tertiary;
  border-radius: 50%;
  transform: scaleY(1.4) scaleX(0.8);

  margin: 2px;
  margin-top: 16px;
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
  transform: scaleY(2.2) scaleX(1.2);

  border-radius: 50%;
}
.carousel__pagination-button--active::after {
  background-color: $accent;
  border-radius: 50%;
}
.carousel__slide {
}
.carousel__slide--prev,
.carousel__slide--next {
  transform: scale(0.8);
  transition: 0.2s all ease-in-out;
}
</style>
