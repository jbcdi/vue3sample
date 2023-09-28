<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
@Component({ components: {} })
class Example extends Vue {}

export default toNative(Example)
</script>
<template>
  <div></div>
</template>

<style></style>
