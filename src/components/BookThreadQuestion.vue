<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
    </div>
    <div class="scrollbar">
      <ul style="list-style: none">
        <li v-for="(thread, indexThread) in sampleQuestion" :key="indexThread">
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
    <div>
      <div style="text-align: center">
        件名:
        <input
          v-bind="title"
          ref="title"
          type="text"
          name="title"
          style="display: inline-block"
        />

        <p>
          入力内容<br />
          <textarea
            v-bind="content"
            type="text"
            ref="content"
            name="content"
            cols="30"
            rows="5"
          ></textarea>
        </p>
        <p>
          <select name="example">
            <option value="選択肢1">Python</option>
            <option value="選択肢2">C++</option>
            <option value="選択肢3">Vue</option>
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
      name: "yata",
      title: "",
      content: "",
    };
  },
  methods: {
    mySubmit() {
      let addObject = {
        name: this.name,
        title: this.$refs.title.value,
        content: this.$refs.content.value,
      };
      sampleQuestion.push(addObject);
    },
  },
};
</script>

<style></style>
