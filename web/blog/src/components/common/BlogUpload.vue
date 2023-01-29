<template>
  <div
    v-if="coverUrl === ''"
    class="w-[300px] h-[150px] border border-dashed rounded-md flex cursor-pointer"
    @click="uploadImg"
  >
    <font-awesome-icon icon="plus" class="m-auto" />
  </div>
  <div v-else @click="uploadImg">
    <img :src="coverUrl" class="w-[300px] h-[150px]" />
  </div>
  <input
    id="upload"
    ref="uploadRef"
    type="file"
    @change="handlerUpload"
    class="w-0 h-0 opacity-0 overflow-hidden absolute z-[-1]"
    accept="image/*"
  />
</template>

<script setup lang="ts">
import Compressor from 'compressorjs'

const coverUrl = ref('')
const uploadRef = ref()
const handlerUpload = (value: any) => {
  //上传前压缩
  let file = value.target.files[0]
  if (!file) {
    return
  }
  new Compressor(file, {
    quality: 0.8,
    success(result) {
      ToBase64(result)
    },
    error(err) {
      console.log(err.message)
    },
  })
}

const ToBase64 = (img: any) => {
  /*转换base64*/
  const imgFile = new FileReader()
  imgFile.readAsDataURL(img)
  imgFile.onload = function () {
    const imgData = this.result?.toString() //base64数据
    coverUrl.value = imgData ?? ''
  }
}
const uploadImg = () => {
  //模拟点击
  uploadRef.value.click()
}
</script>

<style scoped></style>
