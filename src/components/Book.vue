<template>
  <div>
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

<style></style>
