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
            <router-link to="EventDetail">
              <div>{{ event.title }}</div>
            </router-link>
            <table>
              <tr>
                <td v-for="(tag, indexTag) in event.tag" :key="indexTag">
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
          placeholder="イベント名を入力してください"
        />
        <p>
          <textarea
            v-bind="description"
            type="text"
            ref="desc"
            name="content"
            cols="30"
            rows="5"
            placeholder="イベント内容を入力してください"
          ></textarea>
        </p>
        <p>
          開催日時:
          <input type="datetime-local" style="display: inline-block" />
        </p>
        <p>
          終了日時:
          <input type="datetime-local" style="display: inline-block" />
        </p>
        <p>
          <select name="type">
            <option value="選択肢0" hidden>
              イベント種別を選択してください
            </option>
            <option value="選択肢1">勉強会</option>
            <option value="選択肢2">討論会</option>
          </select>
        </p>
        <input
          v-bind="executionStyle"
          ref="executionStyle"
          type="text"
          name="executionStyle"
          placeholder="開催形態を入力してください (例)オンライン, オフライン"
          style="display: inline-block"
        />
        <p>
          <select name="tag">
            <option value="選択肢0" hidden>タグを選択してください</option>
            <option value="選択肢1">スクラム開発</option>
            <option value="選択肢2">ウォーターフォール開発</option>
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
      startTime: "",
      endTime: "",
      description: "",
      timeTable: "",
      type: "",
      executionStyle: "",
      tag: "",
    };
  },
  methods: {
    mySubmit() {
      let addObject = {
        name: this.name,
        title: this.$refs.title.value,
        date: this.$refs.date.value,
        startTime: this.$refs.startTime.value,
        endTime: this.$refs.endTime.value,
        description: this.$refs.desc.value,
        timeTable: this.$refs.timeTable.value,
        type: this.$refs.type.value,
        executionStyle: this.$refs.executionStyle.value,
        tag: this.$refs.tag.value,
      };
      sampleEvent.push(addObject);
    },
  },
};
</script>

<style></style>
