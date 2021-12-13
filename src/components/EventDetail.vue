<template>
  <div class="eventDetail">
    <h1>{{ eventDetail.title }}</h1>

    <div class="main">
      <div></div>
      <p>{{ eventDetail.summary }}</p>
      <br />
      <p>
        <b>開催日：</b>{{ eventDetail.date }} {{ eventDetail.startTime }}~{{
          eventDetail.endTime
        }}
      </p>
      <p><b>イベント種別：</b>{{ eventDetail.type }}</p>
      <div class="detail">
        <p><b>イベント詳細：</b>{{ eventDetail.description }}</p>
      </div>
      <b>タグ：</b>
      <p
        v-for="tag of eventDetail.tag"
        v-bind:key="tag.tag"
        style="display: inline-block"
      >
        <mark background-color:yellow>{{ tag }}</mark
        >&ensp;&ensp;&ensp;&ensp;
      </p>
    </div>
  </div>
</template>

<script>
import sampleEvent from "../data/sampleEvent";
export default {
  data() {
    return { eventDetail: sampleEvent[0] };
  },
};
</script>

<style>
.main {
  padding-left: 50px;
}

.eventDetail {
  text-align: left;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  padding-left: 100px;
  white-space: pre-line;
}

.detail {
  padding-left: 110px;
  text-indent: -110px;
}
</style>
