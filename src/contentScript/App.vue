<template>
  <div v-show="show">
    <iframe
      allowtransparency="true"
      style="background-color=transparent"
      class="chrome-extension-skillmp-search"
      :src="optionsHtml"
      border="0"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const optionsHtml = chrome.runtime.getURL('options.html')
const show = ref(false)
window.addEventListener('message', function (event) {
  if (event.data == 'close-skillmp-search') {
    show.value = false
  }
})
onMounted(() => {
  if (location.href.startsWith('https://skillsmp.com')) {
    show.value = true
  }
})
window.toggleSkillMpSearch = () => {
  console.log('ttttt', show.value)
  show.value = !show.value
}
</script>

<style lang="scss" scoped>
.chrome-extension-skillmp-search {
  position: fixed;
  border-radius: 5px;
  z-index: 99999;
  // top:70px;
  top: 50px;
  left: calc(100% - 400px);
  height: calc(100% - 100px);
  width: 400px;
  // right: 70px;
  // opacity: 0.7;
  opacity: 1;
  // background-color: #fff;
}
</style>
