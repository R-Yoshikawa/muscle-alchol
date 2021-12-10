<template>
  <div>
    <div style="text-align: center">
      検索:<input type="text" name="content" style="display: inline-block" />
    </div>
    <div class="scrollbar">
      <ul style="list-style: none">
        <li v-for="(event, indexEvent) in takeYata" :key="indexEvent">
          {{ event.name }}
          <div class="subtitle">
            <div>{{ event.title }}</div>
            <div>{{ event.content }}</div>
            <div style="text-align: left">
              <button>💛</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sampleEvent from "../data/sampleEvent";
export default {
  components: {},
  computed: {
    takeYata: () => {
      const res = [];
      sampleEvent.forEach((element) => {
        element.name === "yata" && res.push(element);
      });
      return res;
    },
  },
};
</script>

<style></style>
