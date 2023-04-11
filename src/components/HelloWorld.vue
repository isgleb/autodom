<template>
  <div class="grid-wrapper">
    <div v-for="image in images" :class="image.class" :key="image.image.src">
      <img :src="image.image.src" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

enum ImageClass {
  tall = 0,
  wide = 1,
  square = 2,
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

const images = ref([]);

onMounted(() => {
  console.log("fdsdf");
  const imagesSrc = [
    "https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02568.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02578.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02602.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02671.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02674.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02715.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02759.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02838.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02907.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02923.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH02948.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03008.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03020.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03048.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03061.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03096.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03170.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03186.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03211.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03271.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03306.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03451.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03471.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03559.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03567.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03579.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03707.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03754.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03777.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03813.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH03910.jpg",
    "https://cdn.ascgroup.ru/news_media/13099/ACH04011.jpg",
  ];

  imagesSrc.forEach((src) => {
    let newImg = new ImageFormat(src);
    images.value.push(newImg);
    // console.log(newImg);
  });
  console.log(images);
});
</script>

<style scoped>
/*.wrapper {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  gap: 10px;*/
/*  margin: 200px*/
/*}*/

/*img{*/
/*  width:100%;*/
/*  display: block;*/
/*  height: auto;*/
/*}*/

/*.figure {*/
/*  flex: 1 1 30%;*/
/*  margin: 0;*/
/*}*/

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

/* Main CSS */
.grid-wrapper > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-wrapper > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}
.grid-wrapper .wide {
  grid-column: span 2;
}
.grid-wrapper .tall {
  grid-row: span 2;
}
.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
