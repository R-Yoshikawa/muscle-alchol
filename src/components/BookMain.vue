<template>
  <div class="">
    <div class="Title">
      <h1>{{ sampleData.title }}</h1>
    </div>

    <div class="img">
      <a href="#"></a>
    </div>

    <div class="bookDetail">
      <p>著者 ：{{ sampleData.author }}</p>
      <p>出版年：{{ sampleData.year }}</p>
      <p>出版社：{{ sampleData.publisher }}</p>
      <p>概要 ：{{ sampleData.descriptinon }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: {
<<<<<<< HEAD
        title: "私の名前はぴえん",
=======
        title: "Titleはありません★",
>>>>>>> origin/FeatureBookMain
        author: "Takumi",
        year: "2021/12/07",
        publisher: "A Compony",
        descriptinon:
          "この本は読んだら死にます。あなたは明日には今いるところからいなくなります。さて、残りの人生で何をしますか？",
      },
    };
  },
};
</script>

<style>
.main {
  margin: auto;
}
.bookDetail {
  color: rgb(87, 86, 86);
  text-align: left;
  margin-left: 3px;
  text-indent: -3.5em;
}

.img a {
  display: block;
  width: 300px;
  height: 300px;
  background: url(../../public/test.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: -10px;
  float: left;
}
</style>
