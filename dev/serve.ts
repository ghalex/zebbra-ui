import { createApp } from 'vue'
import App from './app.vue'

import ZebbraUI from '@/entry.esm'

const app = createApp(App)

app.use(ZebbraUI)
app.mount('#app')
