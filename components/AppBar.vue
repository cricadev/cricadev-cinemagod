<template>
  <div>
    <div
      class="bg-[#00000c] flex justify-evenly fixed bottom-16 py-4 w-[80%] left-[10%] rounded-lg"
    >
      <NuxtLink
        :to="index"
        v-for="(index, icon) of icons"
        class="flex flex-col items-center"
        @click="active"
      >
        <Icon
          :name="icon"
          class="transition hover:text-accent"
          size="25px"
          :class="[
            {
              'text-accent': $route.name === index,
              'translate-y-3': $route.name !== index,
            },
          ]"
          :key="index"
          :to="index"
        >
        </Icon>
        <span
          class="text-xs transition-all"
          :class="[
            { 'text-accent scale-100': $route.name === index },
            {
              'scale-0': $route.name !== index,
            },
          ]"
          >&#9679;</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const iconStatus = ref(false);
const icons = {
  "material-symbols:home": "home",
  "mdi:food": "food",
  "fluent:people-community-16-filled": "social",
};
</script>
