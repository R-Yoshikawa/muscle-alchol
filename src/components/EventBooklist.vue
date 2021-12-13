<template>
  <div class="EventBooklist">
    <div class="obj">
      <div class="title1">
        <p><b>このイベントに関連する本</b></p>
      </div>
      <div>
        <a href="#" class="btn-gradient-radius">+追加する</a>
      </div>
    </div>
    <ul class="bookList">
      <li v-for="image in images" :key="image.index">
        <div class="iconbook"><img :src="image.src" alt="" /></div>
        <p>{{ image.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          index: 1,
          src: "bookimg.png",
        },
        {
          index: 2,
          src: "bookimg2.png",
        },
      ],
    };
  },
};
</script>

<style>
.EventBooklist {
  border: solid 3px #3dbfb8;
}

.obj {
  display: inline-block;
  text-align: left;
}

.title1 {
  text-align: left;
  font-weight: bold;
  text-decoration: underline;
  font-size: 150%;
}

.btn-gradient-radius {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #078fff 0%, #5f6aff 100%);
  transition: 0.4s;
}

.btn-gradient-radius:hover {
  background-image: linear-gradient(45deg, #078fff 0%, #5f6aff 100%);
}

ul {
  list-style-type: none;
  padding-left: 0%;
}

.bookList {
  margin: auto;
  overflow: hidden;
}

.iconbook {
  width: 150px;
  background-size: 2%;
  background-position: 60%;
  background-position-y: 20px;
  height: 150px;
  margin: 10px;
}

.iconbook img {
  width: 75%;
}

.bookList li {
  float: left;
}
</style>
