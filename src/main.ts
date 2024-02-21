import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

// Styles
import 'primevue/resources/themes/aura-light-teal/theme.css'
import 'primevue/resources/primevue.css'
import 'primeflex/primeflex.css'
import './kipuh!/assets/styles.css'

// Icons
import 'primeicons/primeicons.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

// Components
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, { ripple: true })
app.use(router)

app.component('pv-button', Button)
app.component('pv-sidebar', Sidebar)

app.mount('#app')
