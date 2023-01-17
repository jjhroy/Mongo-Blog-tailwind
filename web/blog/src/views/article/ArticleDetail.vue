<template>
  <div class="w-full h-full bg-[#f3f6f7]">
    <!--封面 -->
    <header-cover>
      <div class="absolute text-[#FFFFFF] text-center">
        <div class="text-[42px] font-semibold">
          {{ articleDetail.articleTitle }}
        </div>
        <div class="text-[16px] flex justify-center">
          <span class="flex items-center">
            <font-awesome-icon icon="calendar" />&nbsp;
            <span>发表于 {{ formatDate(articleDetail.createTime) }}</span>
          </span>
          <span class="mx-2">|</span>
          <span class="flex items-center">
            <font-awesome-icon icon="clock-rotate-left" />&nbsp;
            <span> 更新于 {{ formatDate(articleDetail.updateTime) }} </span>
          </span>
        </div>
        <div class="text-[16px] flex justify-center mt-1">
          <span class="flex items-center">
            <font-awesome-icon icon="eye" />&nbsp;阅读量
            {{ articleDetail.viewsCount }}
          </span>
          <span class="mx-2">|</span>
          <span class="flex items-center">
            <font-awesome-icon icon="receipt" />&nbsp;分类
            {{ articleDetail.categoryName }}
          </span>
        </div>
      </div>
    </header-cover>
    <div class="max-w-[1280px] flex mx-auto py-[16px]">
      <div class="flex-[0.8]">
        <article-main :article-details="articleDetail" />
      </div>
      <div class="flex-[0.2] ml-2">
        <article-side-bar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { articleDetails } from '@/types/api/article'
import { getArticleDetail } from '@/api/article'
import HeaderCover from '@/components/common/HeaderCover.vue'
import ArticleMain from '@/components/article/ArticleMain.vue'
import ArticleSideBar from '@/components/article/ArticleSideBar.vue'
import { formatDate } from '@/utils/dateFormat'

const articleDetail = ref({} as articleDetails)
const route = useRoute()
const getDetail = async () => {
  const data = await getArticleDetail(`${route.fullPath}`)
  articleDetail.value = data
}
onMounted(() => {
  getDetail()
})
</script>
