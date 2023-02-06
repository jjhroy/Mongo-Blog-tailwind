<template>
  <div class="flex flex-col">
    <div class="flex relative avatar" v-if="pinia.loginUserInfo.avatar">
      <div class="tool">
        <router-link to="/article_publish">
          <blog-button type="circle" class="absolute right-12 publish">
            <font-awesome-icon icon="pen" />
          </blog-button>
        </router-link>

        <blog-button
          type="circle"
          class="absolute right-24 logout"
          @click="pinia.logout"
        >
          <font-awesome-icon icon="right-to-bracket" />
        </blog-button>
      </div>

      <blog-avatar
        type="circle"
        :src="pinia.loginUserInfo.avatar"
        class="mb-2"
      ></blog-avatar>
    </div>

    <blog-button
      v-else
      type="circle"
      class="mb-2"
      @click="pinia.showLoginModal = true"
    >
      <font-awesome-icon icon="user" />
    </blog-button>

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
import BlogAvatar from '@/components/mongo-ui/avatar/index.vue'
import BackTop from '@/components/mongo-ui/backtop/index.vue'
import BlogButton from '@/components/mongo-ui/button/index.vue'
import { articleStore } from '@/store'

const pinia = articleStore()
const showSearchModal = () => {
  pinia.showSearchModal = true
}
</script>

<style scoped lang="scss">
.avatar {
  .tool {
    opacity: 0;
  }
  &:hover {
    .tool {
      animation-name: fadeout;
      animation-duration: 3s;
    }
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
