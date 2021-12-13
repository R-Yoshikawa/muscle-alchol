<template>
  <div>
    <div class="tabbox">
      <input type="radio" name="tabset" id="tabcheck1" checked /><label
        for="tabcheck1"
        class="tab"
        >質問</label
      >
      <input type="radio" name="tabset" id="tabcheck2" /><label
        for="tabcheck2"
        class="tab"
        >雑談</label
      >
      <input type="radio" name="tabset" id="tabcheck3" /><label
        for="tabcheck3"
        class="tab"
        >イベント</label
      >
      <input type="radio" name="tabset" id="tabcheck4" /><label
        for="tabcheck4"
        class="tab"
        >レビュー</label
      >

      <div class="tabcontent" id="tabcontent1">
        <BookThreadQuestion />
      </div>
      <div class="tabcontent" id="tabcontent2">
        <BookThreadZatsudan />
      </div>

      <div class="tabcontent" id="tabcontent3">
        <BookThreadEvent />
      </div>
      <div class="tabcontent" id="tabcontent4">
        <BookThreadReview />
      </div>
    </div>
  </div>
</template>

<script>
import BookThreadEvent from "./BookThreadEvent.vue";
import BookThreadQuestion from "./BookThreadQuestion.vue";
import BookThreadZatsudan from "./BookThreadZatsudan.vue";
import BookThreadReview from "./BookThreadReview.vue";
export default {
  data() {
    return {};
  },
  components: {
    BookThreadEvent,
    BookThreadQuestion,
    BookThreadZatsudan,
    BookThreadReview,
  },
};
</script>

<style type="text/css">
/* ▼タブ機能の掲載領域の装飾(※必須ではありません) */
.tabbox {
  margin: 0px;
  padding: 1em;
  text-align: left;
}

/* ▼タブ機能を制御するラジオボタン(非表示にする) */
.tabbox input {
  display: none;
}

/* ▼タブ(共通装飾＋非選択状態の装飾) */
.tab {
  display: inline-block;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: black;
  border-radius: 0.75em 0.75em 0px 0px;
  padding: 0.75em 1em;
  color: black;
  font-weight: bold;
}

/* ▼タブにマウスポインタが載った際の装飾 */
.tab:hover {
  background-color: #ccffcc;
  color: green;
  cursor: pointer;
}

/* ▼チェックが入っているラジオボタンの隣にあるタブの装飾(＝選択状態のタブ) */
input:checked + .tab {
  color: rgb(99, 166, 230);
  background-color: #f0f8ff;
  position: relative;
  z-index: 10;
}

/* ▼タブの中身(共通装飾＋非選択状態の装飾) */
.tabcontent {
  display: none;
  border: 1px solid rgba(0, 0, 0, 0.493);
  margin-top: -1px;
  padding: 1em;
  position: relative;
  z-index: 0;
  background-color: #f0f8ff;
  text-align: left;
}

/* ▼チェックが入っているラジオボタンに対応するタブの中身を表示する */
#tabcheck1:checked ~ #tabcontent1 {
  display: block;
}
#tabcheck2:checked ~ #tabcontent2 {
  display: block;
}
#tabcheck3:checked ~ #tabcontent3 {
  display: block;
}
#tabcheck4:checked ~ #tabcontent4 {
  display: block;
}
.subtitle {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  padding: 5px;
  margin: 5px;
}
.scrollbar {
  border: 1px solid #f0f0f0;
  width: 90%;
  height: 300px;
  overflow: auto;
}
</style>
