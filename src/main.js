import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// import axios from "axios";
import 'element-plus/dist/index.css'

const app = createApp(App)

// app.config.globalProperties.$http=axios
app.use(ElementPlus)
app.mount('#app')
