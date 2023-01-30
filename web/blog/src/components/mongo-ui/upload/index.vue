<template>
  <div v-if="coverUrl !== '' && preView" @click="uploadClick">
    <img :src="coverUrl" class="w-[300px] h-[150px]" />
  </div>
  <div
    v-else
    class="w-[80px] h-[80px] border border-dashed rounded-md flex cursor-pointer"
    @click="uploadClick"
  >
    <font-awesome-icon icon="plus" class="m-auto" />
  </div>

  <input
    ref="uploadRef"
    type="file"
    @change="onUpload"
    class="w-0 h-0 opacity-0 overflow-hidden absolute z-[-1]"
    :multiple="false"
    :accept="accept"
  />
</template>

<script setup lang="ts">
import axios from 'axios'

const props = withDefaults(
  defineProps<{
    file: any
    action: string
    limit?: string
    accept?: string
    preView?: boolean
    beforeUpload?: (file: any) => any
  }>(),
  {
    preView: false,
  }
)

const coverUrl = ref('')
const uploadRef = ref()
/**默认上传方法 */
const onUpload = async (value: any) => {
  console.log('upload', props.file)
  let file = value.target.files[0]
  if (props.beforeUpload != undefined) {
    console.log('压缩')
    file = await props.beforeUpload(file)
  }
  console.log('newSize', props.file)
  // const uploadForm = new FormData()
  // uploadForm.append('file', file)
  // const { data } = await axios.post(props.action, uploadForm)
}
const uploadClick = () => {
  //模拟点击
  uploadRef.value.click()
}
</script>

<style scoped></style>
