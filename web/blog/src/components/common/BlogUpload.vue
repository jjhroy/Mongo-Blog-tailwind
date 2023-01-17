<template>
  <div
    class="w-[300px] h-[150px] border border-dashed rounded-md flex cursor-pointer"
    @click="uploadImg"
  >
    <font-awesome-icon icon="plus" class="m-auto" />
    <input
      id="upload"
      ref="uploadRef"
      type="file"
      @change="handlerUpload"
      class="w-0 h-0 opacity-0 overflow-hidden absolute z-[-1]"
    />
  </div>
</template>

<script setup lang="ts">
const coverUrl = ref('')
const uploadRef = ref()
const handlerUpload = (value: any) => {
  console.log(value.target.files)
}
const uploadImg = () => {
  uploadRef.value.click()
  //   const ele = document.getElementById('upload')
  //   ele?.click()
}
</script>

<style scoped></style>
