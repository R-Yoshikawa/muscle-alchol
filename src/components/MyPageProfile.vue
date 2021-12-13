<template>
  <div class="">
    <div class="Title">
      <h1></h1>
    </div>
    <div class="profileLayout">
      <div class="userImage">
        <div class="userimg">
          <a href="#"></a>
        </div>

        <div>
          <p>QAポイント:{{ userDetail.user_point }}</p>
        </div>
      </div>
      <div class="userDetail">
        <p>
          <b>{{ userDetail.user_name }}</b> ({{ userDetail.user_id }})
        </p>
        <p>{{ userDetail.user_BU }}</p>
        <div class="skill">
          <ul v-for="history of user_history" v-bind:key="history.history">
            <p>{{ history }}</p>
          </ul>
        </div>
      </div>
      <div class="skill">
        <p><b>スキル</b></p>
        <ul v-for="skill of user_skills" v-bind:key="skill.skill">
          <p class="tagStyle">{{ skill }}</p>
        </ul>
      </div>
    </div>
    <div class="ReadBooklistLayout">
      <ul style="display: flex">
        <li style="display: inline">
          <div class="title1">
            <p><b>読んだ本</b></p>
          </div>
        </li>
        <li style="display: inline">
          <a href="#" class="btn-gradient-radius">+追加</a>
        </li>
      </ul>
      <ul class="bookList">
        <li v-for="image in images" :key="image.index">
          <div class="iconbook"><img :src="image.src" alt="" /></div>
          <p>{{ image.name }}</p>
        </li>
      </ul>
    </div>
    <!-- <div class="bookList">
      <div style="text-align: center">
        <ul style="display: flex">
          <li style="display: inline">
            <div class="title1">
              <p><b>参加者一覧</b></p>
            </div>
          </li>
          <li style="display: inline">
            <a href="#" class="btn-gradient-radius">+参加</a>
          </li>
        </ul>
        <div class="bookListLayout">
          <div class="bookimg">
            <a href="#"></a>
          </div>
          <div class="bookimg2">
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetail: {
        user_name: "yata",
        user_id: "N12345",
        user_BU: "テレコムソリューション事業部○○部××グループ",

        user_point: "100",
      },
      user_history: [
        "2018/04 入社",
        "2018/11 aシステム導入案件",
        "2019/11 ローカル5G案件",
        "2020/03 AWS構築案件",
      ],
      user_skills: ["Java", "AWS", "スクラム"],
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

<style scoped>
.main {
  margin: auto;
}

.profileLayout {
  display: flex;
  justify-content: center;
  gap: 30px 50px;
}

.bookListLayout {
  display: flex;
  justify-content: center;
}

.bookList {
  background-color: #f5f5f5;
}

.skill {
  text-align: left;
}

.userDetail {
  width: 500px;
  color: rgb(87, 86, 86);
  text-align: left;
  text-indent: -3.2em;
  white-space: pre-line;
}

.userimg {
  width: 150px;
  background: url(../../public/sampleUserImage.png) no-repeat;
  background-size: 90%;
  background-position: 60%;
  background-position-y: 20px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid gray;
}

.bookimg {
  width: 250px;
  background: url(../../public/bookimg.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: 50px;
  height: 350px;
  text-align: center;
}
.bookimg2 {
  width: 250px;
  background: url(../../public/bookimg2.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: 50px;
  height: 350px;
  text-align: center;
}

.grad-wrap {
  position: relative;
}
.grad-wrap + .grad-wrap {
  margin-top: 40px;
}
.grad-btn {
  z-index: 2;
  position: absolute;
  right: 0;
  left: 10em;
  bottom: -2em;
  width: 148px;
  margin: auto;
  padding: 0.5em 0;
  border-radius: 2px;
  background: #93b9b6;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.grad-btn::after {
  content: "続きを読む";
}
.grad-btn:hover {
  background: #fff;
  color: #009e8f;
}
.grad-btn .fa {
  margin-right: 0.5em;
}
.grad-item {
  position: relative;
  overflow: hidden;
  height: 80px;
}
.grad-item p + p {
  margin-top: 1em;
}
.grad-item::before {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 40px; /*グラデーションで隠す範囲*/
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.9) 50%,
    #fff 100%
  );
  background: linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.9) 50%,
    #fff 100%
  );
}
.grad-trigger {
  display: none;
}
.grad-trigger:checked ~ .grad-btn {
  bottom: -2em;
}
.grad-trigger:checked ~ .grad-btn::after {
  content: "閉じる";
}
.grad-trigger:checked ~ .grad-btn .fa {
  transform: rotate(180deg);
}
.grad-trigger:checked ~ .grad-item {
  height: auto;
}
.grad-trigger:checked ~ .grad-item::before {
  display: none;
}

.bookTitle {
  text-indent: 0;
  position: relative;
  right: 3em;
}

.userImage {
  text-indent: 0;
  position: relative;
  right: 3em;
  padding-bottom: 3em;
}

.tagStyle {
  background-color: rgb(254, 219, 255);
  max-width: 180px;
  text-align: left;
  background-color: #9ec34b;
  font-size: 8px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 4px 8px;
  margin: 4px;
  border-radius: 4px;
  position: relative;
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

.ReadBooklistLayout {
  padding: 1em 1em 1em 3em;
  /* border: solid 3px #3dbfb8; */
}
</style>
