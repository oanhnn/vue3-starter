<template>
  <h1>{{ props.msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>
    )
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button
    type="button"
    class="px-5 py-2 bg-blue-500 border border-blue-700 rounded-sm hover:bg-blue-600 text-white my-10"
    @click="increment"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/counter'

export interface Props {
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  msg: '',
})

const { count, increment } = useCounter()
</script>

<style lang="postcss" scoped>
a {
  @apply text-blue-500;
}

label {
  @apply my-0 mx-0.5 font-bold;
}

code {
  @apply bg-gray-200 rounded-sm px-1 py-0.5 text-gray-600;
}
</style>
