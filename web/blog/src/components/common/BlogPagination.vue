<template>
  <div class="flex items-center">
    <button
      :class="`mr-4 ${isFirstPage() ? 'cursor-not-allowed' : 'cursor-pointer'}`"
      :disabled="isFirstPage()"
      @click="pageChange(1)"
    >
      <font-awesome-icon icon="angle-left" />
    </button>
    <div
      v-for="i in Math.ceil(props.total / props.pageSize)"
      :key="i"
      class="w-[30px] h-[30px] mx-1 text-center border border-1 cursor-pointer"
      :style="isCurrent(i)"
      @click="pageChange(3, i)"
    >
      <span class="leading-[30px]">{{ i }}</span>
    </div>
    <button
      :class="`ml-4 ${isLastPage() ? 'cursor-not-allowed' : 'cursor-pointer'} `"
      @click="pageChange(2)"
      :disabled="isLastPage()"
    >
      <font-awesome-icon icon="angle-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['page-change', 'update:currentPage'])
const props = defineProps<{
  total: number
  pageSize: number
  currentPage: number
}>()
const isCurrent = (index: number) =>
  props.currentPage === index ? 'border-color:#1890FF' : 'border-color:#d9d9d9'
const isFirstPage = () => (props.currentPage === 1 ? true : false)
const isLastPage = () =>
  props.currentPage === Math.ceil(props.total / props.pageSize) ? true : false
const preOrNext = (type: number) =>
  type == 1 ? props.currentPage - 1 : props.currentPage + 1
const pageChange = (type: number, page?: number) => {
  if (type === 3) {
    emits('page-change', page)
    emits('update:currentPage', page)
  } else {
    emits('page-change', preOrNext(type))
    emits('update:currentPage', preOrNext(type))
  }
}
</script>

<style scoped></style>
