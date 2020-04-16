import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faGithub,
  faLine,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faBirthdayCake,
  faBriefcase,
  faCode,
  faEnvelope,
  faGamepad,
  faHeadphones,
  faHistory,
  faHome,
  faMapMarkerAlt,
  faMedal,
  faPhone,
  faStar,
  faUser,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(
  // Solid
  faUser,
  faUserGraduate,
  faHistory,
  faBriefcase,
  faStar,
  faMapMarkerAlt,
  faMedal,
  faPhone,
  faEnvelope,
  faBirthdayCake,
  faHome,
  faHeadphones,
  faCode,
  faGamepad,

  // Brands
  faFacebook,
  faTwitter,
  faLine,
  faGithub,
  faLinkedin,
  faYoutube
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
