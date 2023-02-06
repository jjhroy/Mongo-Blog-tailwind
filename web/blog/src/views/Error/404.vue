<template>
  <div class="flex h-[100vh] bg-[#fff]">
    <div class="m-auto font-semibold text-center">
      <!-- <p class="text-[64px]">404</p>
      <p>啊哦，出错啦</p>
      <p>你寻找的页面走丢啦!</p>
      <router-link to="/" class="link_404">返回主页</router-link> -->
      <m-timeline></m-timeline>
    </div>
  </div>
</template>
<script setup lang="ts">
import MImg from '@/components/mongo-ui/img/index.vue'
import MSelect from '@/components/mongo-ui/select/index.vue'
import MTimeline from '@/components/mongo-ui/timeline/index.vue'
</script>
<style scoped>
.link_404 {
  color: #fff;
  background: #1892ff;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 5px;
  margin: 20px 0;
  display: inline-block;
}
</style>
