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
    <Navbar slot="navbar">
      <NavbarItem to="/" icon="user">Me</NavbarItem>
      <NavbarItem to="/education" icon="user-graduate">Education</NavbarItem>
      <NavbarItem to="/experience" icon="history">Experience</NavbarItem>
      <NavbarItem to="/working-experience" icon="briefcase">Working Experience</NavbarItem>
      <NavbarItem to="/skills" icon="star">Skills</NavbarItem>
    </Navbar>
    <router-view />
  </app-layout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SidebarContent from '@/components/content/SidebarContent'
import { Navbar, NavbarItem } from '@/components/layout/navbar'
import data from './data.json'

export default {
  components: { AppLayout, SidebarContent, Navbar, NavbarItem },

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
  --primary-color-darker: #{$primary-color-darker};
  --accent-color: #{$accent-color};
  --accent-color-darker: #{$accent-color-darker};
  --light-color: #{$light-color};
  --dark-color: #{$dark-color};
  --dark-color-darker: #{$dark-color-darker};
  --dark-color-lighter: #{$dark-color-lighter};
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
  text-shadow: 0.125rem 0.125rem var(--accent-color-darker);
}

a {
  color: var(--accent-color);

  &:hover {
    color: var(--primary-color);
  }
}

blockquote {
  padding: 1rem 1rem 1rem 1.25rem;
  position: relative;

  @include media-breakpoint-up(sm) {
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0.25rem;
    background-color: var(--accent-color);
    box-shadow: 0.125rem 0.125rem var(--accent-color-darker);
  }
}
</style>
