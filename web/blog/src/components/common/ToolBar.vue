<template>
  <div class="flex flex-col">
    <blog-avatar
      type="circle"
      :src="pinia.loginUserInfo.avatar"
      class="mb-2"
    ></blog-avatar>

    <router-link to="/">
      <blog-button type="circle">
        <font-awesome-icon icon="house" />
      </blog-button>
    </router-link>

    <blog-button type="circle" class="mt-2" @click="showSearchModal">
      <font-awesome-icon icon="magnifying-glass" />
    </blog-button>

    <back-top class="mt-2"></back-top>
  </div>
</template>

<script setup lang="ts">
import BlogAvatar from './BlogAvatar.vue'
import BackTop from './BackTop.vue'
import BlogButton from './BlogButton.vue'
import { useStore } from '@/store'

const pinia = useStore()
const showSearchModal = () => {
  pinia.showSearchModal = true
}
</script>

<style scoped lang="scss"></style>
