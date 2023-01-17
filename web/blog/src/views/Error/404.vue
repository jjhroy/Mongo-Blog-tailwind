<template>
  <div class="flex h-[100vh] bg-[#f3f6f7]">
    <div class="m-auto font-semibold text-center">
      <p class="text-[64px]">404</p>
      <p>啊哦，出错啦</p>
      <p>你寻找的页面走丢啦!</p>
      <router-link to="/" class="link_404">返回主页</router-link>
      <blog-input class="mt-8" rounded></blog-input>
      <!-- <blog-popover class="mt-4"></blog-popover> -->
      <blog-button @click="pinia.showLoginModal = !pinia.showLoginModal"
        >通知</blog-button
      >
      <blog-message :visible="isShow" type="error">操作失败</blog-message>
      <div>ssssssssssssssss</div>
    </div>
  </div>
</template>
<script setup>
import BlogMessage from '@/components/common/BlogMessage.vue'
import BlogButton from '@/components/common/BlogButton.vue'
import BlogPopover from '@/components/common/BlogPopover.vue'
import BlogInput from '@/components/common/BlogInput.vue'
import { useStore } from '@/store'

const pinia = useStore()
const isShow = ref(false)
const btnText = ref('show')
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
