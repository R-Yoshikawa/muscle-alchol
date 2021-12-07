<template>
  <div class="main">
    <div class="Title">
      <h1>{{ sampleData.title }}</h1>
    </div>

    <div class="img">
      <a href="#"></a>
    </div>

    <div class="bookDetail">
      <p>{{ sampleData.author }}</p>
      <p>{{ sampleData.year }}</p>
      <p>{{ sampleData.publisher }}</p>
      <p>{{ sampleData.descriptinon }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sampleData: {
        title: "Title",
        author: "Takumi",
        year: "2021/12/07",
        publisher: "A Compony",
        descriptinon: "この本は読んだら死にます",
      },
    };
  },
};
</script>

<style>
.main {
  margin: auto;
  background-color: aqua;
}
.list {
  background-color: brown;
  color: darkgrey;
}
</style>
