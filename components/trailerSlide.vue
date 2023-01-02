<template>
  <div class="" v-for="(trailer, index) of videosArr" :key="index">
    <a
      class="absolute flex items-center justify-center w-10 h-10 rounded-lg play-button bg-accent right-4 bottom-4"
      @click="openVideoModal"
    >
      <Icon name="material-symbols:play-arrow-rounded" size="25px"></Icon>
    </a>
    <Teleport to="body" v-if="toggleVideo">
      <div
        class="bg-[#000] h-screen w-screen fixed top-0 left-0 grid place-items-center z-50"
      >
        <Icon
          name="mdi:arrow-left"
          @click="openVideoModal"
          class="absolute z-50 p-3 rounded-lg bg-secondary top-4 left-4"
          size="50px"
        ></Icon>
        <iframe
          width="80%"
          height="80%"
          :src="`https://www.youtube.com/embed/${trailer}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute z-50 object-cover"
        ></iframe>
      </div>
    </Teleport>
  </div>
</template>
<script setup>
const props = defineProps({
  movie: {
    type: Number,
  },
});
const toggleVideo = ref(false);

const openVideoModal = () => {
  toggleVideo.value = !toggleVideo.value;
};
const videosArr = ref([]);
const getVideos = async () => {
  const { data: videos } = await useLazyFetch(
    `https://api.themoviedb.org/3/movie/${props.movie}/videos?api_key=8a91f9a076d5481969b8175b2414651c&language=en-US`
  );
  // get key from the videos
  videosArr.value.push(videos.value.results[0].key);
};

onBeforeMount(() => {
  getVideos();
});
</script>
<style lang="scss"></style>
