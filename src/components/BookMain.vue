<template>
  <div class="">
    <div class="bookDescription">
      <div class="img">
        <a href="#"></a>
      </div>

      <div class="bookDetail">
        <div class="bookTitle">
          <h2>{{ sampleData.title }}</h2>
        </div>
        <p><b>著者：</b> {{ sampleData.author }}</p>
        <p><b>出版年：</b> {{ sampleData.year }}</p>
        <p><b>出版社：</b> {{ sampleData.publisher }}</p>
        <div class="bookTitle">
          <div class="grad-wrap">
            <input id="trigger1" class="grad-trigger" type="checkbox" />
            <label class="grad-btn" for="trigger1"></label>
            <div class="grad-item">{{ sampleData.descriptinon }}</div>
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
      sampleData: {
        title:
          "SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発",
        author: `西村 直人
                永瀬 美穂
                吉羽 龍太郎`,
        year: "2020/05/20",
        publisher: "翔泳社",
        descriptinon: `はじめて「スクラム」をやることになったら読む本が7年ぶりに増補改訂！
          近年、より複雑化しているプロダクト開発をチームでうまく進めていく手法として、
          世界中で注目されている「スクラム」。実際の開発現場にどう適用すればよいのかを、
          とにかくわかりやすく解説しています。

          ・理論だけで終わらない“実践”の手引き
          ・架空の開発現場を題材に、実際のプラクティスを詳しく解説！

          増補改訂では、初版以降のスクラムのルールの変更を踏まえて、用語や説明の変更、
          最近の開発現場に向けた追補など、全面的な見直しを行っています。

          ・スクラムガイド2017年版に対応
          ・スクラムを実践しているチームの実情にあわせて更新
          ・開発現場の風景を更新
          ・プロダクトをより意識できるように修正
          ・コラムを全面刷新

          これからスクラムをはじめたい人はもちろん、スクラムを導入してみたけどなんだか
          上手くいかないなぁ……と思っている方にぜひ手にとっていただきたい一冊です。

          【本書の概要】
          はじめまして‼
          今回、ひょんなことからスクラムマスターをまかされた「ボク」です。
          スクラムについてまだ何もわかっていないので、この本を参考にしようと思っています。
          おおまかな内容は、次のようになっているんだって。

          ●基礎編
          スクラムの全体像と決められているルールについて説明する。

          ●実践編
          架空の開発現場を題材に、開発が始まるときから時系列に
          スクラムではどう進めていくのかを説明する。

          なるほど。
          それでは、ボクと一緒にこの本でスクラムとはどういったものなのかを学んでいこう！`,
      },
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
  justify-content: flex;
}
.bookDetail {
  width: 700px;
  color: rgb(87, 86, 86);
  text-align: left;
  text-indent: -3.2em;
  white-space: pre-line;
}

.img {
  width: 300px;
  background: url(../../public/sampleImage.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: 50px;
}
.grad-wrap {
  position: relative;
  font-size: 80%;
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
  bottom: -3em;
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

.bookDescription {
  text-indent: 0;
  position: relative;
  right: 3em;
  padding-bottom: 3em;
}
</style>
