<template>
  <div class="eventDetail">
    <h1>{{ eventDetail.title }}</h1>
    <p>{{ eventDetail.tag }}</p>
    <p>{{ eventDetail.description }}</p>
    <p>
      <b>開催日：</b>{{ eventDetail.date }} {{ eventDetail.startTime }}~{{
        eventDetail.endTime
      }}
    </p>
    <p><b>タイムテーブル：</b>{{ eventDetail.timeTable }}</p>
    <p><b>イベント種別：</b>{{ eventDetail.type }}</p>
    <p><b>開催形態：</b>{{ eventDetail.executionStyle }}</p>
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
.eventDetail {
  text-align: left;
  margin: auto;
}
</style>
