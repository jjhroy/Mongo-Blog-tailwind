<template>
  <!--侧边栏-->
  <div class="flex-[0.2] px-4 h-[100vh] sticky top-6 mt-4">
    <!--博客信息-->
    <blog-card>
      <template #body>
        <div class="text-center p-5">
          <blog-avatar
            :src="pinia.blogInfo.websiteConfig.websiteAvatar"
            :size="110"
            type="circle"
          />
        </div>
        <div class="my-[16px] text-center text-xl font-bold">
          {{ pinia.blogInfo.websiteConfig.websiteAuthor }}
        </div>
        <div class="flex justify-between font-semibold text-center px-[16px]">
          <router-link to="/archive" class="flex flex-col">
            <span>文章</span>
            <span>{{ pinia.blogInfo.articleCount }}</span>
          </router-link>
          <div class="flex flex-col">
            <span>标签</span>
            <span>{{ pinia.blogInfo.categoryCount }}</span>
          </div>
          <div class="flex flex-col">
            <span>分类</span>
            <span>{{ pinia.blogInfo.tagCount }}</span>
          </div>
        </div>
      </template>
    </blog-card>

    <!--网站信息-->
    <blog-card class="mt-[24px] min-w-[220px]">
      <template #head>
        <font-awesome-icon icon="bell" class="text-[red]" />&nbsp;<span
          class="ml-1"
          >网站信息</span
        >
      </template>
      <template #body>
        <div class="web-info">
          <div style="padding: 4px 0 0">
            已运行:<span style="float: right !important"
              >{{
                getDayDiff(
                  new Date(pinia.blogInfo.websiteConfig.websiteCreateTime)
                )
              }}天</span
            >
          </div>
          <div style="padding: 4px 0 0">
            访问量:<span style="float: right !important">
              {{ pinia.blogInfo.viewsCount }}
            </span>
          </div>
        </div>
      </template>
    </blog-card>
  </div>
</template>

<script setup lang="ts">
import BlogAvatar from '../mongo_ui/BlogAvatar.vue'
import BlogCard from '../mongo_ui/BlogCard.vue'
import { useStore } from '@/store/index'
import { getDayDiff } from '@/utils/dateFormat'

const pinia = useStore()
</script>

<style scoped></style>
