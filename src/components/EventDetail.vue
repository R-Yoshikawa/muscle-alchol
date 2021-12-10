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
export default {
  data() {
    return {
      eventDetail: {
        title: "スクラム開発アンチパターン勉強会",
        date: "2021/12/14(火)",
        startTime: "18:00",
        endTime: "20:00",
        description:
          "ついついやりがちなアンチパターンや、実際の現場で起こった体験談など、「SCRUM BOOT CAMP」で紹介されている内容と絡めながらディスカッションしましょう...！",
        timeTable: `18:00~18:15 オープニング、自己紹介
                        18:15~19:00 グループディスカッション①
                        19:00~19:45 グループディスカッション②
                        19:45~20:00 クロージング`,
        type: "勉強会",
        executionStyle: "Zoom（URL:https://aaa.zoom/123456789012）",
        tag: "スクラム開発",
      },
    };
  },
};
</script>

<style>
.eventDetail {
  text-align: left;
  margin: auto;
}
</style>
