<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
    </div>
    <div class="scrollbar">
      <ul style="list-style: none">
        <li v-for="(thread, indexThread) in sampleQuestion" :key="indexThread">
          <router-link to="/Mypage">
            <div>{{ thread.name }}</div>
          </router-link>
          <div class="subtitle">
            <div
              onclick="obj=document.getElementById('menu1').style; obj.display=(obj.display=='none')?'block':'none';"
            >
              <a style="cursor: pointer; font-weight: bold"
                >{{ thread.title }}
              </a>
            </div>
            <table>
              <tr>
                <td
                  v-for="(tag, indexTag) in thread.tag"
                  :key="indexTag"
                  class="tagStyle"
                >
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
    <div>
      <div style="text-align: center">
        <input
          v-bind="title"
          ref="title"
          type="text"
          name="title"
          style="display: inline-block"
          size="40"
          placeholder="件名を入力してください"
        />

        <p>
          <textarea
            v-bind="content"
            type="text"
            ref="content"
            name="content"
            cols="42"
            rows="5"
            placeholder="質問内容を入力してください"
          ></textarea>
        </p>
        <p>
          <select name="example" v-bind="tag" ref="tag" style="width: 23em">
            <option value="" hidden>タグを選択してください</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
            <option value="Vue">Vue</option>
            <option value="JavaScript">JavaScript</option>
            <option value="画像処理">画像処理</option>
          </select>
        </p>
        <!-- <button type="submit">投稿</button> -->
        <button v-on:click="mySubmit">投稿</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import sampleQuestion from "../data/sampleQuestion";

export default {
  data() {
    return {
      sampleQuestion,
      tag: [],
      name: "yata",
      title: "",
      content: "",
    };
  },
  methods: {
    mySubmit() {
      const addObject = {
        name: this.name,
        title: this.$refs.title.value,
        content: this.$refs.content.value,
        tag: this.$refs.tag.value === "" ? null : [this.$refs.tag.value],
      };
      sampleQuestion.push(addObject);
    },
  },
};
</script>

<style>
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
</style>
