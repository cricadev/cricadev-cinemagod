<template>
  <img
    :src="`https://www.themoviedb.org/t/p/original/${logo.file_path}`"
    alt=""
    v-for="logo in logosArr"
    class="object-contain w-full h-full"
  />
</template>
<script setup>
const props = defineProps({
  movie: {
    type: Number,
  },
});
const logosArr = ref([]);
const getLogos = async () => {
  const { data: logos } = await useLazyFetch(
    `https://api.themoviedb.org/3/movie/${props.movie}/images?api_key=8a91f9a076d5481969b8175b2414651c`
  );
  logosArr.value.push(logos.value.logos[0]);
};
onBeforeMount(() => {
  getLogos();
});
</script>
<style lang="scss"></style>
