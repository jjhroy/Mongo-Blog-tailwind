import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import { useStore } from "@/store";
// const store = useStore()

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/Error/404.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/home/Home.vue"),
  },
  {
    path: "/articles/:id",
    component: () => import("@/views/article/ArticleDetail.vue"),
  },
  {
    path: "/archive",
    component: () => import("@/views/archive/Archive.vue"),
  }, {
    path: '/article_publish',
    component: () => import('@/views/article/ArticlePublish.vue')
  }
];

const router = createRouter({
  history: createWebHistory(), // history路由模式
  routes,
});

//跳转前
router.beforeEach((to: any, from: any) => {
  if (to.fullPath == '/setting') {
    router.push("/")
  }
  NProgress.start();
});
//跳转后
router.afterEach(() => {
  scrollTo(0, 0);
  NProgress.done();
});


export default router;
