<template>
  <div class="flex h-[100vh] bg-[#f3f6f7]">
    <div class="m-auto font-semibold text-center">
      <p class="text-[64px]">404</p>
      <p>啊哦，出错啦</p>
      <p>你寻找的页面走丢啦!</p>
      <router-link to="/" class="link_404">返回主页</router-link>
    </div>
  </div>
</template>
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
