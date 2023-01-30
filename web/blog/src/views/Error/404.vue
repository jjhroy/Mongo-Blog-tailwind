<template>
  <div class="flex h-[100vh]">
    <div class="m-auto font-semibold text-center">
      <p class="text-[64px]">404</p>
      <p>啊哦，出错啦</p>
      <p>你寻找的页面走丢啦!</p>
      <router-link to="/" class="link_404">返回主页</router-link>
      <m-img
        src="https://tuapi.eees.cc/dongman/pc/TUAPI-EEES-CC--1439151889.jpg"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import MImg from '@/components/mongo-ui/img/index.vue'
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
