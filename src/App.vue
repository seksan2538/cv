<template>
  <app-layout>
    <sidebar-content
      slot="sidebar"
      avatar-src="/images/avatar.jpg"
      firstname="Seksan"
      lastname="Neramitthanasombat"
      position="Front-End Developer"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam fuga dolore?
      Delectus rem ad nihil provident sequi, voluptatibus mollitia.</sidebar-content
    >
    <app-navbar slot="navbar">
      <app-navbar-item to="/" icon="user">Me</app-navbar-item>
      <app-navbar-item to="/education" icon="user-graduate">Education</app-navbar-item>
      <app-navbar-item to="/experience" icon="history">Experience</app-navbar-item>
      <app-navbar-item to="/working-experience" icon="briefcase"
        >Working Experience</app-navbar-item
      >
      <app-navbar-item to="/skills" icon="star">Skills</app-navbar-item>
    </app-navbar>
    <router-view />
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layouts/AppLayout'
import SidebarContent from '@/components/contents/SidebarContent'
import { AppNavbar, AppNavbarItem } from '@/components/ui/navbar'
import data from './data.json'

export default {
  components: { AppLayout, SidebarContent, AppNavbar, AppNavbarItem },

  data() {
    return { ...data }
  },
}
</script>

<style lang="scss">
@import '~@/assets/styles/fonts';
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-vue/dist/bootstrap-vue';

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --primary-color: #{$primary-color};
  --secondary-color: #{$secondary-color};
  --tertiary-color: #{$tertiary-color};
  --light-color: #{$light-color};
  --dark-color: #{$dark-color};
}

body {
  font-family: 'Jost', sans-serif;
  background-color: var(--dark-color);
  color: var(--light-color);
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: bold;
  color: var(--primary-color);
  text-shadow: 0.125rem 0.125rem var(--tertiary-color);
}
</style>
