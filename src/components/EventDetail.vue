<template>
  <div class="eventDetail">
    <h1>{{ eventDetail.eventTitle }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventDetail: {
        eventTitle: "スクラム開発アンチパターン勉強会",
        eventDate: "2021/12/14(火)",
        eventStartTime: "18:00",
        eventEndTime: "20:00",
        eventDescription:
          "ついついやりがちなアンチパターンや、実際の現場で起こった体験談など、「スクラムビートキャンプ」で紹介されている内容と絡めながらディスカッションしましょう...！",
        eventTimeTable: `18:00~18:15 オープニング、自己紹介
                        18:15~19:00 グループディスカッション①
                        19:00~19:45 グループディスカッション②
                        19:45~20:00 クロージング`,
        eventExecutionStyle: "Zoom（URL:https://aaa.zoom/123456789012）",
        eventTag: "スクラム開発",
      },
    };
  },
};
</script>

<style>
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
</style>
