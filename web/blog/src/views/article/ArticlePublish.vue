<template>
  <div class="bg-[#f3f6f7]">
    <header-cover>
      <div class="article-info">
        <h1 class="article-title">发布文章</h1>
      </div>
    </header-cover>
    <div class="lg:py-[5%] lg:px-[15%] p-[16px]">
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
            <BlogUpload
              v-model:file="file"
              accept="image/*"
              action="/api/admin/articles/images"
              :before-upload="beforeUpload"
              pre-view
            />
          </BlogFormItem>
          <m-tag>标签</m-tag>
        </template>
      </blog-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { coverUpload } from '@/api/file'
import Compressor from 'compressorjs'
import BlogCard from '@/components/mongo-ui/card/index.vue'
import BlogFormItem from '@/components/mongo-ui/form/form-item/index.vue'
import BlogUpload from '@/components/mongo-ui/upload/index.vue'
import BlogSwitch from '@/components/mongo-ui/switch/index.vue'
import ArticleEditor from '@/components/article/ArticleEditor.vue'
import MTag from '@/components/mongo-ui/tag/index.vue'

const file = ref()
const isTop = ref(false)
const coverUrl = ref('')
const switchClick = () => {
  isTop.value = !isTop.value
}

//上传前处理
const beforeUpload = (value: any) => {
  console.log('执行上传前处理')
  console.log('file', file.value)
  if (!value) {
    return
  }
  new Compressor(value, {
    quality: 0.8,
    success(result) {
      file.value = result
    },
    error(err) {
      console.log(err.message)
    },
  })
}

//执行上传
const handelUpload = async (file: any) => {
  // const uploadForm = new FormData()
  // uploadForm.append('file', file)
  // const res = await coverUpload(uploadForm)
  // console.log(res)
  console.log('自定义', file)
}

const uploadClick = () => {}

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
