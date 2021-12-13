<template>
  <div>
    <div style="text-align: center">
      件名:
      <input
        v-bind="title"
        ref="title"
        type="text"
        name="title"
        style="display: inline-block"
      />
    </div>
    <p>
      入力内容<br />
      <textarea
        v-bind="content"
        type="text"
        ref="content"
        name="content"
        cols="30"
        rows="5"
      ></textarea>
    </p>
    <!-- <button type="submit">投稿</button> -->
    <button v-on:click="mySubmit">投稿</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "yata",
      title: "",
      content: "",
    };
  },
  methods: {
    /*
   mySubmit() {
      let addObject = {
        name: this.name,
        title: this.$refs.title.value,
        content: this.$refs.content.value,
      };
      //sampleZatsudan.push(addObject);
    },
  */
  },
};
</script>

<style></style>
