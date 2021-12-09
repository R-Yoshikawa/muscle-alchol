import Vue from "vue";
import Router from "vue-router";
import Book from "./components/Book.vue";
import Mypage from "./components/MyPage.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "Book", component: Book },
    { path: "/mypage", name: "Mypage", component: Mypage },
  ],
});
