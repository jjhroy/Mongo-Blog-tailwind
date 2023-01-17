<template>
  <div class="flex mb-6">
    <div class="font-semibold mr-4" v-if="label">
      {{ label }}
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label?: string }>()
</script>

<style scoped></style>
