<template>
  <div class="">
    <div class="burger-menu">
      <div class="fixed px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
        <Icon name="mdi:menu" @click="openNav"></Icon>
      </div>
    </div>
    <nav class="nav">
      <div
        class="fixed top-0 left-0 w-full h-full nav bg-[#000] opacity-50 z-10 menu"
        v-if="toggleNav"
      ></div>
      <div
        v-if="toggleNav"
        class="nav bg-background w-[70%] h-full z-20 fixed top-0 left-0 menu"
      >
        <div class="fixed z-20 px-4 py-3 rounded-xl left-4 top-8 bg-secondary">
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
              <Icon name="material-symbols:settings-outline" size="14px"></Icon>
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
      ></div>
      <div
        v-if="!toggleNav"
        class="nav bg-secondary w-[60%] h-full z-20 fixed top-0 left-0 antimenu"
      >
        <div class="fixed z-20 px-4 py-3 rounded-xl left-4 top-8 bg-secondary">
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
              <Icon name="material-symbols:settings-outline" size="14px"></Icon>
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
      <div class="grid h-full grid-flow-row overflow-auto">
        <div class="card" v-for="(index, item) of movies.results">
          <h1>{{ index.original_title }}</h1>
          <img
            :src="`https://www.themoviedb.org/t/p/w440_and_h660_face/${index.poster_path}`"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="antimenu bg-background menu-style{" v-if="!toggle">
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
      <div class="grid h-full grid-flow-row overflow-auto">
        <div class="card" v-for="(index, item) of movies.results">
          <h1>{{ index.original_title }}</h1>
          <img
            :src="`https://www.themoviedb.org/t/p/w440_and_h660_face/${index.poster_path}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
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

const { data, pending, error, refresh } = await useFetch(
  `https://serpapi.com/?api_key=9baa48cca45fac99af2a2812ec8ff9dfb44b09bc91ad8c18f03249e4b3781956?search.json?`,
  {
    params: {
      q: "eternals theater",
      location: "Austin, Texas, United States",
      hl: "en",
      gl: "us",
    },
  }
);
console.log(data, pending, error, refresh);

//parse fetched data to object
</script>
<style>
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
</style>
