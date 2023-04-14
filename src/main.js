import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
// app.directive('focus', { // регистрация кастомной директивы глобально
//   mounted(el) {
//     el.focus()
//   }
// })

app.mount('#app')
