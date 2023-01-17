<template>
  <!-- 编辑器 -->
  <v-md-editor
    v-model="_content"
    height="600px"
    :disabled-menus="[]"
    @upload-image="uploadImg"
  >
  </v-md-editor>
</template>

<script setup lang="ts">
const _content = ref('')
const props = defineProps<{ content: string }>()
const emits = defineEmits(['update:content'])
const uploadImg = (event: any, insertImage: any, files: File[]) => {
  console.log(files)
}
watch([_content], () => {
  emits('update:content', _content.value)
})
</script>

<style scoped></style>
