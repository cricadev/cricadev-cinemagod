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
    return "๐งญ";
  } else if (lang == "Romance") {
    return "๐";
  } else if (lang == "Horror") {
    return "๐";
  } else if (lang == "Comedy") {
    return "๐คฃ";
  } else if (lang == "Drama") {
    return "๐ญ";
  } else if (lang == "Action") {
    return "๐ฅ";
  } else if (lang == "Thriller") {
    return "๐ช";
  } else if (lang == "Animation") {
    return "๐ฆ";
  } else if (lang == "Science Fiction") {
    return "๐";
  } else if (lang == "Family") {
    return "๐จโ๐ฉโ๐งโ๐ฆ";
  } else if (lang == "Fantasy") {
    return "๐งโโ๏ธ";
  } else if (lang == "Mystery") {
    return "๐ต๏ธโโ๏ธ";
  } else if (lang == "Crime") {
    return "๐ฎโโ๏ธ";
  } else if (lang == "War") {
    return "โ๏ธ";
  } else if (lang == "History") {
    return "๐๏ธ";
  } else if (lang == "Music") {
    return "๐ต";
  } else if (lang == "Documentary") {
    return "๐ฝ๏ธ";
  } else if (lang == "Western") {
    return "๐ค ";
  } else if (lang == "TV Movie") {
    return "๐บ";
  } else {
    return "๐";
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
