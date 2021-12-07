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
        title: "SCRUM BOOT CAMP THE BOOK【増補改訂版】 スクラムチームではじめるアジャイル開発",
        author: `西村 直人
                永瀬 美穂
                吉羽 龍太郎`,
        year: "2020/05/20",
        publisher: "翔泳社",
        descriptinon:
          `はじめて「スクラム」をやることになったら読む本が7年ぶりに増補改訂！

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
.bookDetail {
  color: rgb(87, 86, 86);
  text-align: left;
  margin-left: 3px;
  text-indent: -3.2em;
  white-space: pre-line;
}

.img a {
  display: block;
  width: 300px;
  height: 300px;
  background: url(../../public/sampleImage.png) no-repeat;
  background-size: 60%;
  background-position: 50%;
  background-position-y: -10px;
  float: left;
}
</style>
