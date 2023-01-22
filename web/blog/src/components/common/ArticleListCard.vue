<template>
  <div
    class="bg-[#fff] rounded-lg shadow-lg h-[200px] flex flex-col p-7 max-w-[740px]"
  >
    <!-- 缩略图 -->
    <!-- <router-link :to="`/articles/${article.id}`" class="w-[300px]">
      <img :src="article.articleCover" alt="缩略图" class="h-[200px] rounded-l-lg w-auto" />
    </router-link> -->
    <!-- 文章信息 -->
    <!-- <div class="flex flex-col px-[16px] w-[500px]">

    </div> -->
    <div class="flex">
      <!-- 文章标题 -->
      <router-link
        :to="`/articles/${article.id}`"
        class="font-semibold text-xl hover:text-[#49b1f5] mr-2"
      >
        {{ article.articleTitle }}
      </router-link>
      <span v-if="article.isTop === 1" class="flex items-center text-xs">
        <font-awesome-icon icon="up-long" class="text-[red]" />&nbsp;
        <span>置顶</span>
      </span>
    </div>
    <!-- 文章摘要 -->
    <div class="text-[14px] text-hide mt-2">
      {{ deleteMDTag(article.articleContent) }}
    </div>
    <!-- 其它数据 -->
    <div class="flex mt-auto items-center">
      <span class="flex items-center">
        <font-awesome-icon icon="receipt" />&nbsp; {{ article.categoryName }}
      </span>
      <span
        class="w-[4px] h-[16px] bg-[black] rounded-md border mx-[8px]"
      ></span>
      <span class="flex items-center" v-if="article.tagDTOList.length === 1">
        <font-awesome-icon icon="tag" />&nbsp;
        {{ article.tagDTOList[0].tagName }}
      </span>
      <span class="flex items-center" v-else>
        <font-awesome-icon icon="tag" />&nbsp;{{
          article.tagDTOList[0].tagName
        }}
        ...
      </span>
      <span class="flex items-center ml-auto">
        <font-awesome-icon icon="calendar" />&nbsp;
        {{ formatDate(article.createTime) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import MarkdownIt from 'markdown-it'
import { formatDate } from '@/utils/dateFormat'
import { articles } from '@/types/api/article'

let md = new MarkdownIt()
let cardClass = reactive(['post-article-card'])
let thumbnailLinkClass = reactive(['post-article-thumbail-link'])
const props = defineProps<{
  article: articles
  reverse: boolean
}>()
const deleteMDTag = (articleContent: string) => {
  // 去除markdown标签
  return (articleContent = md
    .render(articleContent)
    .replace(/<\/?[^>]*>/g, '')
    .replace(/[|]*\n/, '')
    .replace(/&npsp;/gi, ''))
}
if (props.reverse) {
  cardClass.push('post-article-card-reversed')
  thumbnailLinkClass.push('post-article-thumbail-link-reversed')
}
</script>

<style scoped lang="scss"></style>
