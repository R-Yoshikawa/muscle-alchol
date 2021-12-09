<template>
  <div class="mainMyPage">
    <MyPageProfile />
  </div>
</template>

<script>
import MyPageProfile from "./MyPageProfile.vue";

export default {
  components: {
    MyPageProfile,
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
