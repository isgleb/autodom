<template>
  <div class="wrapper">
    <MasonryBlock
      :imagesSrc="randomImages"
      style="max-width: 80%"
      class="masonry-block"
    />
  </div>
</template>
<script setup lang="ts">
import MasonryBlock from "@/components/MasonryBlock.vue";

const imageSrc = [
  "https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france.jpg",
  "https://mobirise.com/bootstrap-carousel/assets2/images/thomas-smith-399133-1707x2560.jpg",
  "https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1600304894683-cd9731d4e0eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1569254994521-ddbb54af5ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80",
  "https://images.unsplash.com/photo-1572196459043-5c39f99a7555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://monovisions.com/wp-content/uploads/2015/04/top-10-black-and-white-long-exposure-photographers-josef-hoflehner.jpg",
  "https://fixthephoto.com/images/content/square-format-photography-leading-lines.jpg",
  "https://fixthephoto.com/images/content/square-format-photography-negative-space.jpg",
];

const randomImages = [];

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 30; i++) {
  randomImages.push(imageSrc[randomIntFromInterval(0, imageSrc.length - 1)]);
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  width: 80%;
  margin: auto;
}

.masonry-block {
  margin-top: 20px;
}
</style>
