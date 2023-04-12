<template>
  <div class="grid-wrapper">
    <div v-for="img in images" :class="img.cssClass" :key="img.src">
      <img :src="img.src" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, Ref, ref, defineProps } from "vue";

enum BrickCssClass {
  tall = "tall",
  wide = "wide",
  square = "square",
}
// masonry walls are made of bricks
class ImageBrick extends Image {
  cssClass?: BrickCssClass;
  constructor(src: string) {
    super();
    this.src = src;
  }
}

const props = defineProps({
  imagesSrc: { required: true, type: Array as PropType<string[]> },
});

const images: Ref<ImageBrick[]> = ref([]);

props.imagesSrc.forEach((src: string) => {
  let newImg = new ImageBrick(src);
  newImg.onload = () => {
    const ratio = 1.4;
    const imageAspectRatio = newImg.naturalWidth / newImg.naturalHeight;

    switch (true) {
      case ratio <= imageAspectRatio:
        newImg.cssClass = BrickCssClass.wide;
        break;
      case ratio <= 1 / imageAspectRatio:
        newImg.cssClass = BrickCssClass.tall;
        break;
      default:
        newImg.cssClass = BrickCssClass.square;
        break;
    }
    images.value.push(newImg);
  };
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  background: linear-gradient(45deg, #190f2c, #200b30);
  padding: 15px;
}
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  display: inline-block;
}

.grid-wrapper > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-wrapper > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-auto-rows: 30vh;
  grid-auto-flow: dense;
  margin: auto;
}

@media (max-width: 480px) {
  .grid-wrapper {
    grid-auto-rows: 20vh;
  }
}

.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .square {
  grid-column: span 1;
  grid-row: span 1;
}
</style>
