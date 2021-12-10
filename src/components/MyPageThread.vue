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
        <MyPageThreadQuestion />
      </div>
      <div class="tabcontent" id="tabcontent2">
        <MyPageThreadZatsudan />
      </div>

      <div class="tabcontent" id="tabcontent3">
        <MyPageThreadEvent />
      </div>
      <div class="tabcontent" id="tabcontent4">
        <MyPageThreadReview />
      </div>
    </div>
  </div>
</template>

<script>
import MyPageThreadEvent from "./MyPageThreadEvent.vue";
import MyPageThreadQuestion from "./MyPageThreadQuestion.vue";
import MyPageThreadReview from "./MyPageThreadReview.vue";
import MyPageThreadZatsudan from "./MyPageThreadZatsudan.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyPageThreadEvent,
    MyPageThreadQuestion,
    MyPageThreadReview,
    MyPageThreadZatsudan,
  },
};
</script>
