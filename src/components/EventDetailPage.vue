<template>
  <div class="mainEventDetailPage">
    <EventDetail />
    <EventParticipant />
    <EventBooklist />
  </div>
</template>

<script>
import EventDetail from "./EventDetail.vue";
import EventParticipant from "./EventParticipant.vue";
import EventBooklist from "./EventBooklist.vue";
export default {
  components: {
    EventDetail,
    EventParticipant,
    EventBooklist,
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
