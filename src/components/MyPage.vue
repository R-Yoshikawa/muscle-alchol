<template>
  <div class="mainMyPage">
    <MyPageProfile />
    <MyPageThread />
  </div>
</template>

<script>
import MyPageProfile from "./MyPageProfile.vue";
import MyPageThread from "./MyPageThread.vue";
export default {
  components: {
    MyPageProfile,
    MyPageThread,
  },
};
</script>

<style scoped>
.mainMyPage {
  width: 80%;
  margin: 0 auto;
  max-width: 5000px;
}
</style>
