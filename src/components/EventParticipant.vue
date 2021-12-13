<template>
  <div class="EventPartcipant1">
    <div class="obj1">
      <div class="title1">
        <p><b>参加者一覧</b></p>
      </div>
      <div>
        <a href="#" class="btn-gradient-radius">+参加者</a>
      </div>
    </div>
    <ul class="participantList">
      <li v-for="image in images" :key="image.index">
        <div class="icon"><img :src="image.src" alt="" /></div>
        <p>{{ image.name }}</p>
        <div class="category1">
          <p>
            <b>{{ image.category }}</b>
          </p>
        </div>
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
          src: "icon_business_man07.png",
          category: "開催者",
          name: "yata",
        },
        {
          index: 2,
          src: "icon_business_man05.png",
          category: "参加者",
          name: "yata123",
        },
        {
          index: 3,
          src: "icon_business_man10.png",
          category: "司会",
          name: "tamori",
        },
      ],
    };
  },
};
</script>

<style>
.EventPartcipant1 {
  padding: 1em 1em 1em 3em;
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

.participantList {
  margin: auto;
  overflow: hidden;
}

.icon {
  width: 150px;
  background-size: 90%;
  background-position: 60%;
  background-position-y: 20px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid gray;
  margin: 10px;
}

.participantList li {
  float: left;
}

.category1 {
  border: solid 1px orangered;
  margin: 30px;
  padding: 0px;
}
</style>
