<template>
  <blog-card class="bg-[white]">
    <template #body>
      <!--文章内容-->
      <div class="article-content">
        <v-md-preview
          :text="props.articleDetails.articleContent"
        ></v-md-preview>
      </div>
    </template>
  </blog-card>
</template>

<script setup lang="ts">
import BlogCard from '@/components/mongo_ui/BlogCard.vue'

const props = defineProps<{ articleDetails: any }>()
</script>
