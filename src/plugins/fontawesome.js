import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBriefcase,
  faHistory,
  faMapMarkerAlt,
  faStar,
  faUser,
  faUserGraduate,
  faMedal,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(faUser, faUserGraduate, faHistory, faBriefcase, faStar, faMapMarkerAlt, faMedal)

Vue.component('font-awesome-icon', FontAwesomeIcon)
