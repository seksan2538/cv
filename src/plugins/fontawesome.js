import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBriefcase,
  faHistory,
  faStar,
  faUser,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(faUser, faUserGraduate, faHistory, faBriefcase, faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
