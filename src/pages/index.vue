<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator'
import { ref } from 'vue'
@Component({ components: {} })
class Index extends Vue {}
export default toNative(Index)
</script>
<template>
  <div></div>
</template>
<style></style>
