<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
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
    <BookForm />
  </div>
</template>

<script>
import sampleZatsudan from "../data/sampleZatsudan";
import BookForm from "./BookFormOthers.vue";
export default {
  components: {
    BookForm,
  },
  data() {
    return {
      sampleZatsudan,
    };
  },
};
</script>

<style></style>
