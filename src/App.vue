<template>
  <img alt="Vue logo" src="./assets/img/logo.png" class="inline-block" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
})
</script>

<style lang="postcss">
body {
}
#app {
  @apply antialiased min-h-screen text-gray-500 bg-white text-center pt-16;
}
</style>
