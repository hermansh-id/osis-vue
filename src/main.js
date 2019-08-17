import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
Vue.config.productionTip = false
Vue.use(ArgonDashboard)

firebase.initializeApp({
  apiKey: "AIzaSyBRz721HsoTykxwYx4R2eC0f4QdjyJJ54I",
  authDomain: "osis-vote.firebaseapp.com",
  databaseURL: "https://osis-vote.firebaseio.com",
  projectId: "osis-vote",
  storageBucket: "osis-vote.appspot.com",
  messagingSenderId: "436461220737",
  appId: "1:436461220737:web:3477c660b9a05851"
})

export const db = firebase.firestore()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
