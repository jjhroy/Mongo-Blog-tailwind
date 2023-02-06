<template>
  <blog-modal
    v-model:visible="pinia.showSearchModal"
    :header="false"
    :footer="false"
  >
    <template #body>
      <!-- 输入框 -->
      <div
        class="flex px-1 py-2 w-full border-2 border-[#605f61] rounded-[2rem] items-center"
      >
        <font-awesome-icon icon="magnifying-glass" class="ml-2" />
        <blog-input :border="false" :width="600"></blog-input>
      </div>
      <!-- 搜索结果 -->
      <div class="search-result-wrapper">
        <hr class="divider" />
        <ul>
          <li
            class="search-result"
            v-for="item of state.articleList"
            :key="item.id"
          >
            <!-- 文章标题 -->
            <a @click="toArticleDetail(item.id)" v-html="item.articleTitle" />
            <!-- 文章内容 -->
            <p
              class="search-result-content text-justify"
              v-html="item.articleContent"
            />
          </li>
        </ul>
        <!-- 搜索结果不存在提示 -->
        <div
          v-show="state.flag && state.articleList.length == 0"
          style="font-size: 0.875rem"
        >
          找不到您查询的内容：{{ state.keywords }}
        </div>
      </div>
    </template>
  </blog-modal>
</template>

<script setup lang="ts">
import BlogInput from '../mongo-ui/input/index.vue'
import BlogModal from '../mongo-ui/modal/index.vue'
import { searchArticle } from '@/api/article'
import { articles } from '@/types/api/article'
import { reactive } from 'vue'
import { articleStore } from '@/store/index'
import { useRouter } from 'vue-router'
const pinia = articleStore()
const router = useRouter()

const state = reactive({
  articleList: [] as articles[],
  keywords: '',
  flag: false,
})

const toArticleDetail = (id: number) => {
  pinia.showSearchModal = false
  router.push(`/articles/${id}`)
}
const search = async () => {
  state.flag = state.keywords.trim() != '' ? true : false
  const data = await searchArticle(state.keywords)
  state.articleList = data
}
</script>

<style scoped>
.search-title {
  color: #49b1f5;
  font-size: 1.25rem;
  line-height: 1;
}

.search-input-wrapper {
  display: flex;
  padding: 5px;
  height: 45px;
  width: 100%;
  border: 2px solid #8e8cd8;
  border-radius: 2rem;
}

@media (min-width: 960px) {
  .search-result-wrapper {
    padding-right: 5px;
    height: 450px;
    overflow: auto;
  }
}

@media (max-width: 959px) {
  .search-result-wrapper {
    height: calc(100vh - 110px);
    overflow: auto;
  }
}

.search-result a {
  color: #555;
  font-weight: bold;
  border-bottom: 1px solid #999;
  text-decoration: none;
}

.search-result-content {
  color: #555;
  cursor: pointer;
  border-bottom: 1px dashed #ccc;
  padding: 5px 0;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.divider {
  margin: 20px 0;
  border: 2px dashed #d2ebfd;
}
</style>
