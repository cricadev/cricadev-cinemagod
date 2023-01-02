<script setup>
const moviesArr = ref([]);
const getMovieData = async () => {
  const { data: movies } = await useLazyFetch(
    `http://api.themoviedb.org/3/movie/${movieID}?api_key=8a91f9a076d5481969b8175b2414651c`
  );
  moviesArr.value.push(logos.value.logos[0]);
};
onBeforeMount(() => {
  getMovieData();
});
</script>
<template>
  <div></div>
</template>
<style lang="scss"></style>
