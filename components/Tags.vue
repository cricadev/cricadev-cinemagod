<script setup>
const isCheckAll = ref(false);
const langsdata = ["Adventure", "Romance", "Horror"];
let languages = ref([]);
let addedLAngs = ref([]);

const checkAll = () => {
  isCheckAll.value = !isCheckAll.value;
  languages = [];
  if (isCheckAll.value) {
    // Check all
    for (var key in langsdata) {
      languages.push(langsdata[key]);
      addedLAngs.value.push(langsdata[key]);
    }
  }
};

const updateCheckall = (lang) => {
  if (languages.length == langsdata.length) {
    isCheckAll.value = true;
  } else {
    isCheckAll.value = false;
  }
  if (addedLAngs.value.includes(lang)) {
    addedLAngs.value.findIndex((item) => {
      if (item == lang) {
        addedLAngs.value.splice(addedLAngs.value.indexOf(lang), 1);
      }
    });
  } else {
    addedLAngs.value.push(lang);
  }
};
const getNameTag = (lang) => {
  if (lang == "Adventure") {
    return "🧭";
  } else if (lang == "Romance") {
    return "💗";
  } else if (lang == "Horror") {
    return "🎃";
  }
};
</script>
<template>
  <div class="self-center">
    <!-- Check All -->
    <span class="hidden">{{ languages }} {{ addedLAngs }}</span>
    <!-- Checkboxes list -->
    <ul
      class="w-full overflow-x-auto overflow-y-hidden flex items-center h-fit gap-2 rounded-lg justify-self-center"
    >
      <li v-for="lang in langsdata.slice(0, 5)">
        <label
          class="px-8 py-2 transition-all rounded-lg text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center relative button-special select-none text-center justify-center border-none shadow-2xl"
          :class="[
            {
              'bg-accent text-white': languages.includes(lang),
              'bg-secondary ': !languages.includes(lang),
            },
          ]"
        >
          <span> {{ getNameTag(lang) }} </span>
          <span
            class="transition-all"
            :class="[
              {
                'bg-[green2] text-black dark:text-white translate-x-2':
                  languages.includes(lang),
                'translate-x-2 text-green2 dark:text-green':
                  !languages.includes(lang),
              },
            ]"
          >
            {{ lang }}
          </span>
          <input
            type="checkbox"
            class="hidden"
            v-bind:value="lang"
            v-model="languages"
            @change="updateCheckall(lang)"
          />
        </label>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.modal-into {
  justify-content: space-around;
  align-items: center;
  height: 80%;
}

.dark .modal {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 7%,
    rgba(0, 1, 13, 1) 7%,

    rgba(0, 1, 13, 1) 100%
  );
}
.modal {
  display: grid;
  place-items: center;
  pointer-events: all;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 7%,
    rgba(246, 246, 246, 1) 7%,

    rgba(246, 246, 246, 1) 100%
  );
  transition: all 0.2s;
  // slide out animation
  transform: translateX(100%);

  &.active {
    transform: translateX(0%);

    transition: all 0.2s;
    .arrow {
      pointer-events: all;
      place-self: center start;
      top: 10%;
      left: 10%;
    }
  }
}
</style>
