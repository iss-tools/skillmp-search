import { createApp } from 'vue'

import App from './App.vue'
const ele = document.createElement('div')
ele.className = 'chrome-extension-sample'
ele.id = 'chrome-extension-sample'
document.body.appendChild(ele)
const app = createApp(App)

app.mount('#chrome-extension-sample')
