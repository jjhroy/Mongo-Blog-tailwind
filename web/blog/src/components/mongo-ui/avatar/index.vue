<template>
  <img
    :src="src"
    :class="`${
      type === 'circle' ? 'rounded-[50%]' : ''
    } w-[${size}px] h-[${size}px]`"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ type?: string; src: string; size?: number }>(),
  {
    type: 'default',
    size: 40,
  }
)
</script>

<style scoped></style>
