<template>
  <img
    :src="`https://www.themoviedb.org/t/p/original/${logo.file_path}`"
    alt=""
    v-for="logo in moviesArr"
    class="object-contain w-full h-full"
  />
</template>
<script setup>
const props = defineProps({
  movie: {
    type: Number,
  },
});

const moviesArr = ref([]);
const getMovieData = async () => {
  const { data: logos } = await useLazyFetch(
    `https://api.themoviedb.org/3/movie/${props.movie}/images?api_key=8a91f9a076d5481969b8175b2414651c`
  );
  moviesArr.value.push(logos.value.logos[0]);
};
onBeforeMount(() => {
  getMovieData();
});
</script>
<style lang="scss"></style>
