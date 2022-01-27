import Vue from 'vue'
import VueRouter from 'vue-router'
import Genese from '../views/Genese.vue'
import Objectifs from '../views/Objectifs.vue'
import Public from '../views/Public.vue'
import References from '../views/References.vue'
import Analyse from '../views/Analyse.vue'
import Contraintes from '../views/Contraintes.vue'
import Planification from '../views/Planification.vue'
import Communication from '../views/Communication.vue'
import Realisation from '../views/Realisation.vue'
import Probleme from '../views/Probleme.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Genese',
    component: Genese
  },
  {
    path: '/objectifs',
    name: 'Objectifs',
    component: Objectifs
  },
  {
    path: '/public',
    name: 'Public',
    component: Public
  },
  {
    path: '/references',
    name: 'References',
    component: References
  },
  {
    path: '/analyse',
    name: 'Analyse',
    component: Analyse
  },
  {
    path: '/contraintes',
    name: 'Contraintes',
    component: Contraintes
  },
  {
    path: '/planification',
    name: 'Planification',
    component: Planification
  },
  {
    path: '/communication',
    name: 'Communication',
    component: Communication
  },
  {
    path: '/realisation',
    name: 'Realisation',
    component: Realisation
  },
  {
    path: '/probleme',
    name: 'Probleme',
    component: Probleme
  },
]

const router = new VueRouter({
  routes
})

export default router
