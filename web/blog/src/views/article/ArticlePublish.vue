<template>
  <div class="bg-[#f3f6f7]">
    <header-cover>
      <div class="article-info">
        <h1 class="article-title">发布文章</h1>
      </div>
    </header-cover>
    <div class="lg:py-[5%] lg:px-[25%] p-[16px]">
      <blog-card class="p-[24px]">
        <template #body>
          <!-- 标题 -->
          <input
            type="text"
            placeholder="请填写文章标题 (不超过 100 字)"
            v-model="articleFrom.title"
            spellcheck="false"
            class="max-w-[860px] mx-auto mb-6 text-center bg-transparent text-[26px] border-b-[2px] border-solid border-[#3b3636db] outline-none"
            :style="articleFrom.title!.length < 16 ? `width:450px` : `width:${articleFrom.title!.length * (2 - 0.4) + 4}rem`"
          />
          <!-- 编辑器 -->
          <ArticleEditor
            v-model:content="articleFrom.content"
            @update:content="(v: string) => (articleFrom.content = v)"
          />

          <BlogFormItem label="置顶" class="mt-6">
            <BlogSwitch @click="switchClick" :is-enable="isTop"></BlogSwitch>
          </BlogFormItem>

          <BlogFormItem label="文章封面">
            <BlogUpload />
          </BlogFormItem>
        </template>
      </blog-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogFormItem from '@/components/common/BlogFormItem.vue'
import BlogUpload from '@/components/common/BlogUpload.vue'
import BlogSwitch from '@/components/common/BlogSwitch.vue'
import ArticleEditor from '@/components/article/ArticleEditor.vue'

const isTop = ref(false)
const switchClick = () => {
  isTop.value = !isTop.value
}

const articleFrom = ref({
  title: '',
  content: '',
  cover: '',
  categoryName: null,
  tagNameList: [],
  originalUrl: '',
  isTop: 0,
  type: 1,
  status: 1,
})
</script>

<style scoped></style>
