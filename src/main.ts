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
import DataTable from 'primevue/datatable'
import DynamicDialog from 'primevue/dynamicdialog'
import Toast from 'primevue/toast'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Tag from 'primevue/tag'
import FileUpload from 'primevue/fileupload'

// For DataTable
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row'

// Services
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, { ripple: true })
app.use(DialogService)
app.use(ToastService)
app.use(router)

app.component('pv-button', Button)
app.component('pv-sidebar', Sidebar)
app.component('pv-data-table', DataTable)
app.component('pv-column', Column)
app.component('pv-column-group', ColumnGroup)
app.component('pv-row', Row)
app.component('pv-dynamic-dialog', DynamicDialog)
app.component('pv-toast', Toast)
app.component('pv-input-group', InputGroup)
app.component('pv-input-group-addon', InputGroupAddon)
app.component('pv-input-text', InputText)
app.component('pv-input-number', InputNumber)
app.component('pv-dropdown', Dropdown)
app.component('pv-input-icon', InputIcon)
app.component('pv-icon-field', IconField)
app.component('pv-tag', Tag)
app.component('pv-file-upload', FileUpload)

app.mount('#app')
