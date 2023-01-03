<script setup>
const props = defineProps({
  movie: {
    type: Number,
    required: true,
  },
});
const getNameTag = (lang) => {
  if (lang == "Adventure") {
    return "🧭";
  } else if (lang == "Romance") {
    return "💗";
  } else if (lang == "Horror") {
    return "🎃";
  } else if (lang == "Comedy") {
    return "🤣";
  } else if (lang == "Drama") {
    return "🎭";
  } else if (lang == "Action") {
    return "🥋";
  } else if (lang == "Thriller") {
    return "🔪";
  } else if (lang == "Animation") {
    return "🦄";
  } else if (lang == "Science Fiction") {
    return "🚀";
  } else if (lang == "Family") {
    return "👨‍👩‍👧‍👦";
  } else if (lang == "Fantasy") {
    return "🧙‍♂️";
  } else if (lang == "Mystery") {
    return "🕵️‍♂️";
  } else if (lang == "Crime") {
    return "👮‍♂️";
  } else if (lang == "War") {
    return "⚔️";
  } else if (lang == "History") {
    return "🏛️";
  } else if (lang == "Music") {
    return "🎵";
  } else if (lang == "Documentary") {
    return "📽️";
  } else if (lang == "Western") {
    return "🤠";
  } else if (lang == "TV Movie") {
    return "📺";
  } else {
    return "🌏";
  }
};
const moviesArr = ref([]);
const genresArr = ref([]);
const getMovieData = async () => {
  const { data: movies } = await useLazyFetch(
    `http://api.themoviedb.org/3/movie/${props.movie}?api_key=8a91f9a076d5481969b8175b2414651c`
  );

  moviesArr.value.push(movies.value.genres);
  moviesArr.value.forEach((movie, index) => {
    genresArr.value.push(movie[index].name);
  });
};

getMovieData();
</script>
<template>
  <div v-for="(movie, index) of genresArr" class="">
    <span class="inline p-1 rounded-lg bg-tertiary text-text text-[.7rem]">
      {{ getNameTag(movie) }}
    </span>
  </div>
</template>
<style lang="scss"></style>
