<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
    </div>
    <div class="scrollbar">
      <ul style="list-style: none">
        <li v-for="(thread, indexThread) in takeYata" :key="indexThread">
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
                <td
                  class="tagStyle"
                  v-for="(tag, indexTag) in thread.tag"
                  :key="indexTag"
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
  </div>
</template>

<script>
import sampleQuestion from "../data/sampleQuestion";

export default {
  components: {},
  computed: {
    takeYata: () => {
      const res = [];
      sampleQuestion.forEach((element) => {
        element.name === "yata" && res.push(element);
      });
      return res;
    },
  },
};
</script>

<style></style>
