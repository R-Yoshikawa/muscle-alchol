<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
    </div>
    <div class="scrollbar">
      <ul style="list-style: none">
        <li v-for="(review, indexReview) in sampleReview" :key="indexReview">
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
            placeholder="レビュー内容を入力してください"
          ></textarea>
        </p>
        <!-- <button type="submit">投稿</button> -->
        <button v-on:click="mySubmit">投稿</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import sampleReview from "../data/sampleReview";

export default {
  data() {
    return {
      sampleReview,
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
      };
      sampleReview.push(addObject);
    },
  },
};
</script>

<style></style>
