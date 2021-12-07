<template>
  <div class="mainBook">
    <Header />
    <BookMain />
    <BookThread />
  </div>
</template>

<script>
import BookMain from "./BookMain.vue";
import BookThread from "./BookThread.vue";
import Header from "./Header.vue";

export default {
  components: {
    BookMain,
    BookThread,
    Header,
  },
};
</script>

<style scoped>
.mainBook {
  width: 80%;
  margin: 0 auto;
  max-width: 5000px;
}
</style>
