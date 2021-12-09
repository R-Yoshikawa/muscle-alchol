<template>
  <div>
    <div class="tabbox">
      <input type="radio" name="tabset" id="tabcheck1" checked /><label
        for="tabcheck1"
        class="tab"
        >スレッド</label
      >
      <input type="radio" name="tabset" id="tabcheck2" /><label
        for="tabcheck2"
        class="tab"
        >レビュー</label
      >
      <div class="tabcontent" id="tabcontent1">
        <div class="scrollbar">
          <ul style="list-style: none"></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style type="text/css">
/* ▼タブ機能の掲載領域の装飾(※必須ではありません) */
.tabbox {
  margin: 0px;
  padding: 1em;
  background-color: #f8f8ff;
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
  background-color: #e0e0e0;
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
  color: red;
  background-color: #ffffcc;
  position: relative;
  z-index: 10;
}

/* ▼タブの中身(共通装飾＋非選択状態の装飾) */
.tabcontent {
  display: none;
  border: 1px solid black;
  margin-top: -1px;
  padding: 1em;
  position: relative;
  z-index: 0;
  background-color: #ffffcc;
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

.scrollbar {
  border: 1px solid #f0f0f0;
  width: 90%;
  height: 300px;
  overflow: auto;
}
</style>
