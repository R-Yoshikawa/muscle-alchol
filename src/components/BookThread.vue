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
        <div style="text-align: center">
          検索:<input
            type="text"
            name="content"
            style="display: inline-block"
          />
        </div>
        <div class="scrollbar">
          <ul style="list-style: none">
            <li
              v-for="(thread, indexThread) in sampleQuestion"
              :key="indexThread"
            >
              <div class="subtitle">
                <router-link to="/Mypage">
                  <div>{{ thread.name }}</div>
                </router-link>

                <div
                  onclick="obj=document.getElementById('menu1').style; obj.display=(obj.display=='none')?'block':'none';"
                >
                  <a style="cursor: pointer; font-weight: bold"
                    >{{ thread.title }}
                  </a>
                </div>
                <table>
                  <tr>
                    <td v-for="(tag, indexTag) in thread.tag" :key="indexTag">
                      {{ tag }}
                    </td>
                  </tr>
                </table>
                <div>{{ thread.content }}</div>
                <button>💛</button>

                <!-- ここから先を折りたたむ -->
                <div id="menu1" style="display: none; clear: both">
                  <!--この部分が折りたたまれ、展開ボタンをクリックすることで展開します。-->
                  <ul style="list-style: none">
                    <li
                      v-for="(reply, indexReply) in thread.reply"
                      :key="indexReply"
                    >
                      {{ reply.name }}
                      <div class="subtitle">
                        <div>
                          {{ reply.content }}
                        </div>
                        <table>
                          <tr>
                            <td><button>💛</button></td>
                            <td v-if="indexReply == thread.reply.length - 1">
                              <button>↵</button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </li>
                  </ul>
                </div>

                <!--// ここまでを折りたたむ -->
              </div>
            </li>
          </ul>
        </div>
        <form action="#" method="post" style="text-align: center">
          <div style="text-align: center">
            件名:
            <input type="text" name="content" style="display: inline-block" />
          </div>
          <p>
            入力内容<br />
            <textarea name="comment" cols="30" rows="5"></textarea>
          </p>
          <p>
            <select name="example">
              <option value="選択肢1">Python</option>
              <option value="選択肢2">C++</option>
              <option value="選択肢3">Vue</option>
            </select>
            <br />
          </p>
          <button type="submit">投稿</button>
        </form>
      </div>

      <div class="tabcontent" id="tabcontent2">
        <div style="text-align: center">
          検索:<input
            type="text"
            name="content"
            style="display: inline-block"
          />
        </div>
        <div class="scrollbar">
          <ul style="list-style: none">
            <li
              v-for="(zatsudan, indexZatsudan) in sampleZatsudan"
              :key="indexZatsudan"
            >
              {{ zatsudan.name }}
              <div class="subtitle">
                <div>{{ zatsudan.title }}</div>
                <div>{{ zatsudan.content }}</div>
                <div style="text-align: left">
                  <button>💛</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <form action="#" method="post" style="text-align: center">
          <div style="text-align: center">
            件名:
            <input type="text" name="content" style="display: inline-block" />
          </div>
          <p>
            入力内容<br />
            <textarea name="comment" cols="30" rows="5"></textarea>
          </p>
          <button type="submit">投稿</button>
        </form>
      </div>

      <div class="tabcontent" id="tabcontent3">
        <div style="text-align: center">
          検索:<input
            type="text"
            name="content"
            style="display: inline-block"
          />
        </div>
        <div class="scrollbar">
          <ul style="list-style: none">
            <li v-for="(event, indexEvent) in sampleEvent" :key="indexEvent">
              {{ event.name }}
              <div class="subtitle">
                <router-link to="#">
                  <div>{{ event.title }}</div>
                </router-link>
                <div>{{ event.content }}</div>
                <div style="text-align: left">
                  <button>💛</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <form action="#" method="post" style="text-align: center">
          <div style="text-align: center">
            件名:
            <input type="text" name="content" style="display: inline-block" />
          </div>
          <p>
            入力内容<br />
            <textarea name="comment" cols="30" rows="5"></textarea>
          </p>
          <button type="submit">投稿</button>
        </form>
      </div>
      <div class="tabcontent" id="tabcontent4">
        <div style="text-align: center">
          検索:<input
            type="text"
            name="content"
            style="display: inline-block"
          />
        </div>
        <div class="scrollbar">
          <ul style="list-style: none">
            <li
              v-for="(review, indexReview) in sampleReview"
              :key="indexReview"
            >
              {{ review.name }}
              <div class="subtitle">
                <div>{{ review.title }}</div>
                <div>{{ review.content }}</div>
                <div style="text-align: left">
                  <button>💛</button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <form action="#" method="post" style="text-align: center">
          <div style="text-align: center">
            件名:
            <input type="text" name="content" style="display: inline-block" />
          </div>
          <p>
            入力内容<br />
            <textarea name="comment" cols="30" rows="5"></textarea>
          </p>

          <button type="submit">投稿</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import sampleReview from "../data/sampleReview";
import sampleQuestion from "../data/sampleQuestion";
import sampleEvent from "../data/sampleEvent";
import sampleZatsudan from "../data/sampleZatsudan";

export default {
  data() {
    return {
      sampleReview,
      sampleQuestion,
      sampleEvent,
      sampleZatsudan,
    };
  },
};
</script>

<style type="text/css">
/* ▼タブ機能の掲載領域の装飾(※必須ではありません) */
.tabbox {
  margin: 0px;
  padding: 1em;
  background-color: #f8f8ff;
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
