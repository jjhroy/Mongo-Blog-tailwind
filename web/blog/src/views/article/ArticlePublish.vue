<template>
  <div class="bg-[#f3f6f7]">
    <header-cover>
      <div class="article-info">
        <h1 class="article-title">发布文章</h1>
      </div>
    </header-cover>
    <div class="lg:py-[5%] lg:px-[15%] p-[16px]">
      <m-card class="p-[24px]">
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

          <m-form>
            <m-form-item label="置顶" class="mt-6">
              <m-switch @click="switchClick" :is-enable="isTop"></m-switch>
            </m-form-item>

            <m-form-item label="文章分类">
              <m-select></m-select>
            </m-form-item>

            <m-form-item label="文章标签">
              <m-select></m-select>
            </m-form-item>

            <m-form-item label="文章封面">
              <m-upload
                v-model:file="file"
                accept="image/*"
                action="/api/admin/articles/images"
                :before-upload="beforeUpload"
                pre-view
              />
            </m-form-item>
          </m-form>
        </template>
      </m-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { coverUpload } from '@/api/file'
import { getTagsData } from '@/api/blog'
import { tag, category } from '@/types/api/blog'
import Compressor from 'compressorjs'
import MSelect from '@/components/mongo-ui/select/index.vue'
import MCard from '@/components/mongo-ui/card/index.vue'
import MForm from '@/components/mongo-ui/form/form/index.vue'
import MFormItem from '@/components/mongo-ui/form/form-item/index.vue'
import MUpload from '@/components/mongo-ui/upload/index.vue'
import MSwitch from '@/components/mongo-ui/switch/index.vue'
import ArticleEditor from '@/components/article/ArticleEditor.vue'

const file = ref()
const isTop = ref(false)
const coverUrl = ref('')
const switchClick = () => {
  isTop.value = !isTop.value
}
const showPopover = ref(false)
const tagList = ref<tag[]>()

//上传前处理
const beforeUpload = async (value: any) => {
  console.log('执行上传前处理', value)
  console.log('file', file.value)
  const uploadForm = new FormData()
  uploadForm.append('file', value)
  const res = await coverUpload(uploadForm)
  if (!value) {
    return
  }
  new Compressor(value, {
    quality: 0.8,
    success(result) {
      //Blob 转 File
      file.value = new window.File([result], value.name, { type: value.type })
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
  categoryName: '',
  tagNameList: [],
  originalUrl: '',
  isTop: 0,
  type: 1,
  status: 1,
})

onMounted(async () => {
  tagList.value = await getTagsData()
})
</script>

<style scoped></style>
