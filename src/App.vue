<template>
  <img alt="Vue logo" src="./assets/img/logo.png" class="inline-block" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style lang="postcss">
body {
  @apply p-0 m-0;
}
#app {
  @apply antialiased min-h-screen text-gray-500 bg-white text-center pt-16;
}
</style>
