<script setup>
const props = defineProps({
  movie: {
    type: Number,
    required: true,
  },
  showActor: {
    type: Boolean,
    required: false,
    default: false,
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
const actorsArr = ref([]);
const getActorData = async () => {
  const { data: movies } = await useLazyFetch(
    `http://api.themoviedb.org/3/movie/${props.movie}/credits?api_key=8a91f9a076d5481969b8175b2414651c`
  );

  actorsArr.value.push(movies.value.cast[0].name);
};
getActorData();
</script>
<template>
  <div class="flex items-center gap-2">
    <div v-for="(movie, index) of genresArr" class="">
      <span class="inline p-1 rounded-lg bg-tertiary text-text text-[.7rem]">
        {{ getNameTag(movie) }}
      </span>
    </div>
    <div class="" v-if="props.showActor">
      <div v-for="(movie, index) of actorsArr" class="">
        <span class="inline p-2 rounded-lg bg-tertiary text-tex">
          {{ movie }}
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
