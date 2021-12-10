<template>
  <form action="#" method="post" style="text-align: center">
    <div style="text-align: center">
      件名:
      <input type="text" name="content" style="display: inline-block" />
    </div>
    <p>
      入力内容<br />
      <textarea name="comment" cols="30" rows="5"></textarea>
    </p>
    <p>
      <select name="example">
        <option value="選択肢1">Python</option>
        <option value="選択肢2">C++</option>
        <option value="選択肢3">Vue</option>
      </select>
      <br />
    </p>
    <button type="submit">投稿</button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
