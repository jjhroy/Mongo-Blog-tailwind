<template>
  <m-card class="bg-[white]">
    <template #body>
      <!--文章内容-->
      <div class="article-content">
        <v-md-preview
          :text="props.articleDetails.articleContent"
        ></v-md-preview>
      </div>
    </template>
  </m-card>
</template>

<script setup lang="ts">
import MCard from '@/components/mongo-ui/card/index.vue'

const props = defineProps<{ articleDetails: any }>()
</script>
