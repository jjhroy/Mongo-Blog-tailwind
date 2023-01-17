<template>
  <div class="bg-[#f3f6f7]">
    <header-cover>
      <div class="article-info">
        <h1 class="article-title">归档</h1>
      </div>
    </header-cover>
    <div class="lg:py-[5%] lg:px-[25%] p-[16px]">
      <blog-card class="p-[24px]">
        <template #body>
          <div>
            <div class="font-semibold text-[24px] mb-2">
              共发布了{{ state.count }}篇文章
            </div>
            <div v-for="(item, index) in state.archiveList" :key="index">
              <div class="font-semibold text-[20px] mb-2">
                {{ item.year }}
              </div>
              <div
                v-for="(archive, index) in item.recordList"
                :key="index"
                class="pl-4"
              >
                <div class="mb-2">
                  <span class="text-lg mr-4">{{
                    formatDate_MD(archive.createTime)
                  }}</span>
                  <span class="text-lg">
                    {{ archive.articleTitle }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2 mx-auto">
            <blog-pagination
              :pageSize="10"
              :total="state.count"
              v-model:currentPage="state.current"
              @page-change="pageChange"
            ></blog-pagination>
          </div>
        </template>
      </blog-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import BlogPagination from '@/components/common/BlogPagination.vue'
import { onMounted, reactive } from 'vue'
import HeaderCover from '@/components/common/HeaderCover.vue'
import BlogCard from '@/components/common/BlogCard.vue'
import { getArchiveData } from '@/api/blog'
import { archiveShowList } from '@/types/api/blog'
import { archives } from '@/types/api/blog'
import { formatDate_MD } from '@/utils/dateFormat'
import dayjs from 'dayjs'

const modalVisible = ref(false)
const state = reactive({
  archiveList: [] as archiveShowList[],
  count: 0,
  current: 1,
})
onMounted(() => {
  getArchive()
})
const pageChange = (page: number) => {
  state.current = page
  console.log(state.current)
  getArchive()
}
const getArchive = async () => {
  const data = await getArchiveData(state.current)
  let arr = dataResort(data.recordList)
  state.archiveList = arr
  state.count = data.count
}

const dataResort = (data: archives[]) => {
  // 定义空数组，用于存储新组装的数据
  let newArr = [] as archiveShowList[]
  // 遍历数组
  data.forEach((item, i) => {
    // 默认当前操作的数据下标 -1
    let index = -1
    // 判断数组中是否已经存在当前遍历数据的时间
    let isExists = newArr.some((newItem, j) => {
      if (parseInt(dayjs(item.createTime).year().toString()) === newItem.year) {
        // 存在就保存当前数据下标  用于插入数据
        index = j
        return true
      }
    })
    // 如果没有就存储一条新对象数据
    if (!isExists) {
      newArr.push({
        year: parseInt(dayjs(item.createTime).year().toString()),
        recordList: [item],
      })
    } else {
      // 如果有就插入到已存在的对象中
      newArr[index].recordList.push(item)
    }
  })
  // 返回新数组
  return newArr
}
</script>
<style scoped lang="scss">
@import 'include-media/dist/include-media';

.archive {
  background-color: var(--theme-background);
  color: var(--theme-color);

  .pagination {
    @apply text-center mt-4;
  }

  .time {
    color: var(--theme-color);
    @apply mr-2;
  }

  a {
    color: var(--theme-color);

    @apply text-[1.1rem];

    &:hover {
      color: #03a9f4 !important;
      //@apply text-[1.2rem]
    }
  }
}
</style>
