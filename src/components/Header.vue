<template>
  <div class="header">
    <a href="" class="btn btn-radius-solid btn--shadow"
      >一覧に戻る<i class="fas fa-angle-right fa-position-right"></i
    ></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a.btn-radius-solid {
  background: #f1e767;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f1e767),
    to(#feb645)
  );
  background: -webkit-linear-gradient(top, #f1e767 0%, #feb645 100%);
  background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
  float: left;
  font-size: 20px;
}

a.btn-radius-solid:hover {
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#f1e767),
    to(#feb645)
  );
  background: -webkit-linear-gradient(bottom, #f1e767 0%, #feb645 100%);
  background: linear-gradient(to top, #f1e767 0%, #feb645 100%);
}
.header {
  height: 30px;
  background: #00dafc;
  color: #fff;
  width: 100%;
  border-bottom: black 10px;
}
</style>
