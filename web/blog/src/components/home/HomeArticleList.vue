<template>
  <!--文章列表-->
  <div class="flex-[0.8] flex flex-col">
    <article-list-card
      v-for="(item, index) in state.articleList"
      :key="item.id"
      :article="item"
      :reverse="index % 2 == 1"
      ref="scrollComponent"
      class="mt-4"
    />
    <InfiniteLoading @infinite="test" class="mx-auto my-3">
      <template #complete>
        <span>没有更多了</span>
      </template>
    </InfiniteLoading>
  </div>
</template>

<script setup lang="ts">
import { articleStore } from '@/store/index'
import { articles } from '@/types/api/article'
import { getArticleList } from '@/api/article'
import ArticleListCard from '@/components/common/ArticleListCard.vue'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'

const scrollComponent = ref()
const test = async ($state: { complete: any; loaded: any }) => {
  const data = await getArticleList(++state.currentPage, state.currentType)
  if (data.length != 0) {
    state.articleList.push(...data)
    $state.loaded()
  } else {
    $state.complete()
  }
}

const count = ref(5)
const load = () => {
  count.value += 2
  console.log('test')
}

const pinia = articleStore()
const state = reactive({
  trendingRepos: [],
  page: 1,
  noResult: false,
  message: '',
  visible: false,
  uploadCode: '',
  fileList: [],
  time: '',
  articleList: [] as articles[],
  // noResult: false,
  // message: '',
  isShowSortBtn: false,
  animateType: 'btn animate__animated animate__fadeInDown',
  themeClass: true,
  timer: null as any,
  currentType: 1,
  currentPage: 1,
})
const getHomeArticleList = async (page?: number, type?: number) => {
  const data = await getArticleList(
    page != undefined ? page : ++state.currentPage,
    type || state.currentType
  )
  // //第一页覆盖，其余继续添加到列表里
  if (page == 1) {
    state.articleList = data
  } else {
    state.articleList.push(...data)
  }
}

const sortArticle = (page: number, type: number) => {
  state.currentType = type
  state.currentPage = page
  getHomeArticleList(page, type)
}

const handleScroll = () => {
  let element = scrollComponent.value
  console.log(element)

  // if (element.getBoundingClientRect().bottom < window.innerHeight) {
  //   loadMorePosts()
  // }
}

onMounted(() => {
  getHomeArticleList(1, 1)
  // window.addEventListener('scroll', () => {
  //   handleScroll()
  // })
})
</script>

<style scoped lang="scss">
.infinite-list {
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}

.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
