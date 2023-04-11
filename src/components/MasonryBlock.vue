<template>
  <div class="grid-wrapper">
    <div v-for="img in images" :class="img.class" :key="img.image.src">
      <img :src="img.image.src" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType, Ref, ref, defineProps } from "vue";

enum ImageClass {
  tall = "tall",
  wide = "wide",
  square = "",
}

class ImageFormat {
  class?: ImageClass;
  image: HTMLImageElement;

  constructor(src: string) {
    this.image = new Image();
    this.image.src = src;
    switch (true) {
      case this.image.naturalWidth > this.image.naturalHeight:
        this.class = ImageClass.wide;
        break;
      case this.image.naturalWidth < this.image.naturalHeight:
        this.class = ImageClass.tall;
        break;
      default:
        this.class = ImageClass.square;
        break;
    }
  }
}

const props = defineProps({
  imagesSrc: { required: true, type: Array as PropType<string[]> },
});

const images: Ref<ImageFormat[]> = ref([]);

onMounted(() => {
  console.log(props.imagesSrc);

  props.imagesSrc.forEach((src: string) => {
    let newImg = new ImageFormat(src);
    images.value.push(newImg);
  });
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-flow: dense;
}
.grid-wrapper .wide {
  grid-column: span 1;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
