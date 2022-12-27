<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <AppBar></AppBar>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route);
</script>

<style>
body {
  background-color: #151517;
  color: #eee;
}
</style>
