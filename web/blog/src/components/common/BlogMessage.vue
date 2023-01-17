<template>
  <div
    v-if="visible"
    class="absolute min-w-[120px] max-w-max h-[40px] bg-white top-8 left-[50%] transform translate-x-[-50%] p-1 l flex items-center justify-center shadow-lg rounded-lg"
  >
    <font-awesome-icon
      v-if="type === 'success'"
      icon="check"
      class="mr-2 text-[#50a14f]"
    />
    <font-awesome-icon v-else icon="xmark" class="mr-2 text-[#c91243]" />
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: string; visible: boolean }>(), {
  type: 'success',
})
</script>

<style scoped></style>
