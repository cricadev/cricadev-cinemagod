<template>
  <div v-for="logo in logosArr" class="">
    <div class="" v-if="logo">
      <img
        :src="`https://www.themoviedb.org/t/p/original/${logo.file_path}`"
        alt=""
        class="object-contain w-full h-full"
      />
    </div>
    <div class="" v-else></div>
  </div>
  <!--  
  />-->
</template>
<script setup>
const props = defineProps({
  movie: {
    type: Number,
  },
});

const logosArr = ref([]);
const getLogoData = async () => {
  const { data: logos } = await useLazyFetch(
    `http://api.themoviedb.org/3/movie/${props.movie}/images?api_key=8a91f9a076d5481969b8175b2414651c`
  );

  logosArr.value.push(toRaw(logos.value.logos[0]));
};
getLogoData();
</script>
<style lang="scss"></style>
