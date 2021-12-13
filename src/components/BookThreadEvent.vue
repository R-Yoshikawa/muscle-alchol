<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
    </div>
    <div class="scrollbar">
      <ul style="list-style: none">
        <li v-for="(event, indexEvent) in sampleEvent" :key="indexEvent">
          <router-link to="/Mypage">
            <div>{{ event.name }}</div>
          </router-link>

          <div class="subtitle">
            <nobr>
              <router-link to="EventDetail">
                {{ event.title }}
              </router-link>
            </nobr>

            <nobr style="margin-left: 50px">
              {{ event.date }} {{ event.startTime }}～{{ event.endTime }}</nobr
            >

            <table>
              <tr>
                <td
                  v-for="(tag, indexTag) in event.tag"
                  :key="indexTag"
                  class="tagStyle"
                >
                  {{ tag }}
                </td>
              </tr>
            </table>
            <div>{{ event.description }}</div>

            <div style="text-align: left">
              <button>💛</button>
            </div>
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
          placeholder="イベント名を入力してください"
        />
        <p>
          <textarea
            v-bind="description"
            ref="desc"
            type="text"
            name="content"
            cols="42"
            rows="5"
            placeholder="イベント内容を入力してください"
          ></textarea>
        </p>
        <input
          v-bind="executionStyle"
          ref="executionStyle"
          type="text"
          name="executionStyle"
          placeholder="開催形態を入力してください (例)オンライン, オフライン"
          style="display: inline-block"
          size="40"
        />
        <p>
          開催日時:
          <input
            v-bind="startDate"
            ref="startDate"
            type="datetime-local"
            style="display: inline-block"
          />
        </p>
        <p>
          終了日時:
          <input
            v-bind="endDate"
            ref="endDate"
            type="datetime-local"
            style="display: inline-block"
          />
        </p>

        <p>
          <select name="type" v-bind="type" ref="type" style="width: 23em">
            <option value="" hidden>イベント種別を選択してください</option>
            <option value="勉強会">勉強会</option>
            <option value="討論会">討論会</option>
          </select>
        </p>

        <p>
          <select name="tag" v-bind="tag" ref="tag" style="width: 23em">
            <option value="" hidden>タグを選択してください</option>
            <option value="スクラム開発">スクラム開発</option>
            <option value="ウォーターフォール開発">
              ウォーターフォール開発
            </option>
          </select>
        </p>

        <button v-on:click="mySubmit">投稿</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import sampleEvent from "../data/sampleEvent";

export default {
  components: {},
  data() {
    return {
      sampleEvent,
      name: "yata",
      title: "",
      date: "",
      startDate: "",
      endDate: "",
      description: "",
      //  timeTable: "",
      type: "",
      executionStyle: "",
      tag: [],
    };
  },
  methods: {
    mySubmit() {
      const addObject = {
        name: this.name,
        title: this.$refs.title.value,
        date: this.$refs.startDate.value.substr(0, 10).replace(/-/g, "/"),

        startTime: this.$refs.startDate.value.substr(11),
        endTime: this.$refs.endDate.value.substr(11),

        description: this.$refs.desc.value,
        //    timeTable: this.$refs.timeTable.value,
        type: this.$refs.type.value === "" ? null : [this.$refs.type.value],
        executionStyle: this.$refs.executionStyle.value,
        tag: this.$refs.tag.value === "" ? null : [this.$refs.tag.value],

        relatedBook: "これ",
      };
      sampleEvent.push(addObject);
    },
  },
};
</script>

<style scoped>
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
