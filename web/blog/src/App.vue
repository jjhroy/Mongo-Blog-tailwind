<template>
  <div v-if="pinia.blogInfo">
    <!--回到顶部-->
    <div class="tool-group">
      <tool-bar></tool-bar>
    </div>

    <div>
      <!--主体-->
      <router-view :key="route.fullPath"></router-view>
      <!--底部栏-->
      <foot-bar></foot-bar>
    </div>
    <!--搜索弹窗-->
    <search-modal></search-modal>
    <!--登录弹窗-->
    <login-modal></login-modal>
  </div>
</template>

<script setup lang="ts">
import { getBlogInfo } from './api/blog'
import { uploadUserInfo } from './api/user'
import { useRoute } from 'vue-router'
import { useStore } from './store/index'
import ToolBar from '@/components/common/ToolBar.vue'
import FootBar from '@/layouts/FootBar.vue'
import LoginModal from '@/components/common/LoginModal.vue'
import SearchModal from '@/components/common/SearchModal.vue'

const route = ref(useRoute())
const pinia = useStore()
const consoleInit = () => {
  console.log(
    '#######################################\n#                                     #\n#             Mongo BLog              #\n#             Version 2.0             #\n#   github:https://github.com/jjhroy  #\n#   gitee:https://gitee.com/jjhroy    #\n#            Power by ROY             #\n#                                     #\n#######################################'
  )
}

const getInfo = async () => {
  const data = await getBlogInfo()
  pinia.saveBlogInfo(data)
}
onMounted(() => {
  //获取博客信息
  getInfo()
  //上传用户信息
  uploadUserInfo()
  consoleInit()
})
</script>

<style scoped>
.tool-group {
  position: fixed;
  right: 24px;
  bottom: 124px;
  z-index: 999;
}
</style>
