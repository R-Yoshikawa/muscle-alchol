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

    <BookForm />
  </div>
</template>

<script>
import sampleReview from "../data/sampleReview";
import BookForm from "./BookFormOthers.vue";
export default {
  components: {
    BookForm,
  },
  data() {
    return {
      sampleReview,
    };
  },
};
</script>

<style></style>
