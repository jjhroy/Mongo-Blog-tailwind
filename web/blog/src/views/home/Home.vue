<template>
  <div class="bg-[#f3f6f7]">
    <header-cover>
      <TypeIt
        :values="['Mongo Blog']"
        :cursor="false"
        :speed="150"
        class="text-[#ffffff] text-5xl font-semibold absolute"
      />
    </header-cover>
    <div class="mx-auto flex max-w-[1024px]">
      <home-article-list />
      <home-side-bar />
    </div>
  </div>
</template>
<script setup lang="ts">
import TypeIt from '@/utils/typeit'
import HomeSideBar from '@/components/home/HomeSideBar.vue'
import HeaderCover from '@/components/mongo-ui/HeaderCover.vue'
import HomeArticleList from '@/components/home/HomeArticleList.vue'

// const pinia = useStore()
</script>
