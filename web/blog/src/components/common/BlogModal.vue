<template>
  <!-- 遮罩层-->
  <div
    v-if="visible"
    @click="closeModal(true)"
    class="absolute top-0 left-0 h-full w-full"
    style="background: rgba(0, 0, 0, 0.5)"
    ref="maskRef"
  ></div>
  <!--MODAL-->
  <div
    v-if="visible"
    @click.stop
    :class="`${
      paddingHide ? '' : 'p-4'
    } absolute top-0 bottom-0 left-0 right-0 m-auto 
    w-[${width}px]
    h-[${height}px]
    bg-white rounded-md flex flex-col modal`"
  >
    <slot name="header" v-if="header">
      <div class="flex">
        <span class="font-semibold text-lg">{{ props.title }}</span>
        <font-awesome-icon
          icon="xmark"
          class="ml-auto text-lg cursor-pointer"
          @click="closeModal"
        />
      </div>
    </slot>
    <slot name="body"> this is a message </slot>

    <slot name="footer" v-if="footer">
      <div class="flex mt-auto">
        <div class="ml-auto">
          <blog-button>取消</blog-button>
          <blog-button class="ml-2" type="primary">确认</blog-button>
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import BlogButton from './BlogButton.vue'

const maskRef = ref()
const emits = defineEmits(['update:visible'])
const props = withDefaults(
  defineProps<{
    title?: string
    visible: boolean
    header?: boolean
    footer?: boolean
    maskClose?: boolean
    paddingHide?: boolean
    width?: number
    height?: number
  }>(),
  {
    title: 'Title',
    visible: false,
    header: true,
    footer: true,
    maskClose: true,
    paddingHide: false,
    width: 600,
    height: 400,
  }
)
const closeModal = (allow: boolean) => {
  if (allow) {
    emits('update:visible', false)
  }
}

const stopHandler = (event: any) => {
  console.log(event)
}

watch(props, () => {
  if (props.visible) {
    document.body.setAttribute('style', 'overflow-x:hidden;overflow-y:hidden;')
  } else {
    document.body.setAttribute('style', 'overflow-x:auto;overflow-y:auto;')
  }
})
</script>

<style scoped lang="scss">
.modal {
  animation: fadeIn 0.1s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>
