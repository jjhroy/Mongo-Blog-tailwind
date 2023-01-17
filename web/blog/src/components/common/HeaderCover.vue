<template>
  <div
    class="article-cover"
    :style="`background-image:url(${props.defaultCover || randomUrl})`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const props = withDefaults(defineProps<{ defaultCover?: string }>(), {
  defaultCover: '',
})
const randomUrl = ref('')

const getCover = async () => {
  const { data } = await axios.get('/random/api.php?category=dongman&type=url')
  randomUrl.value = data
}
onMounted(() => {
  getCover()
})
</script>

<style scoped>
.article-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url(https://api.yimian.xyz/img?type=moe&size=1920x*); */
  /* background-image: url(https://api.vvhan.com/api/acgimg); */
  /* background-image: url(http://www.dmoe.cc/random.php); */
  /* background-image: url(https://tuapi.eees.cc/api.php?category=dongman&type=302); */
  height: 400px;
  width: 100%;
  animation: fadeUpInCover 1s;
}

.article-cover::before {
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.3);
  content: '';
  position: absolute;
}

@keyframes fadeUpInCover {
  0% {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
    opacity: 0%;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 100%;
  }
}
</style>
