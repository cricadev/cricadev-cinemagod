<script setup>
const props = defineProps({
  movie: {
    type: Number,
    required: true,
  },
});
const moviesArr = ref([]);
const getMovieData = async () => {
  const { data: movies } = await useLazyFetch(
    `http://api.themoviedb.org/3/movie/${props.movie}/credits?api_key=8a91f9a076d5481969b8175b2414651c`
  );

  moviesArr.value.push(movies.value.cast[0].name);
};
onBeforeMount(() => {
  getMovieData();
});
</script>
<template>
  <div v-for="(movie, index) of moviesArr" class="">
    <span class="inline p-2 rounded-lg bg-tertiary text-tex">
      {{ movie }}
    </span>
  </div>
</template>
<style lang="scss"></style>
