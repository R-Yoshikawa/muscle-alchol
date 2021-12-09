<template>
  <div class="">
    <div class="Title">
      <h1></h1>
    </div>
    <div class="bookDescription">
      <div class="userImage">
        <div class="userimg">
          <a href="#"></a>
        </div>

        <div class="userPoint">
          <p>QAポイント:{{ userDetail.user_point }}</p>
        </div>
      </div>
      <div class="userDetail">
        <p>{{ userDetail.user_name }}</p>
        <p>{{ userDetail.user_id }}</p>
        <p>{{ userDetail.user_BU }}</p>
        <p>{{ userDetail.user_history }}</p>
      </div>
      <div class="userPoint">
        <p>スキル</p>
        <ul v-for="skill of user_skills" v-bind:key="skill.skill">
          <li>{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div class="bookList">
      <div style="text-align: center">
        <p>読んだ本リスト</p>
        <div class="bookDescription">
          <div class="bookimg">
            <a href="#"></a>
          </div>
          <div class="bookimg2">
            <a href="#"></a>
          </div>
          <div style="text-align: right">
            <button>追加</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetail: {
        user_name: "日鉄 太郎",
        user_id: "N24410",
        user_BU: `金融ソリューション事業本部
                  金融プラットフォーム事業部
                  キャピタルマーケットソリューション部`,
        user_history: `・2018/04 入社
                  ・2018/11 A銀行aシステム導入案件
                  ・2019/11 B銀行規制対応案件
                  ・2020/03 C銀行AWS構築案件`,
        user_point: "100",
      },
      user_skills: ["Java", "金融工学", "スクラム"],
    };
  },
};
</script>

<style>
.main {
  margin: auto;
}

.bookDescription {
  display: flex;
  justify-content: center;
}

.userDetail {
  width: 700px;
  color: rgb(87, 86, 86);
  text-align: left;
  text-indent: -3.2em;
  white-space: pre-line;
}

.userimg {
  width: 300px;
  background: url(../../public/sampleUserImage.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: 50px;
  height: 270px;
}
.bookimg {
  width: 100px;
  background: url(../../public/bookimg.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: 50px;
  height: 200px;
  text-align: center;
}
.bookimg2 {
  width: 100px;
  background: url(../../public/bookimg2.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: 50px;
  height: 200px;
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
</style>
