import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './axios'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')

/* //<head>
<meta charset="UTF-8">
<link rel="icon" href="/TrialTasker/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Trial Tasker</title>
<script type="module" crossorigin="" src="/TrialTasker/assets/index-bd688be8.js"></script>
<link rel="stylesheet" href="/TrialTasker/assets/index-f046f101.css">
</head> */

/* <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido</title>
    <script type="module" crossorigin="" src="/assets/index-00611a45.js"></script>
    <link rel="stylesheet" href="/assets/index-b9d134ab.css">
  <link rel="modulepreload" as="script" crossorigin="" href="/assets/LandingPage-b197096f.js"><link rel="stylesheet" href="/assets/LandingPage-4185aefb.css"></head> */
