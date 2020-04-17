<template>
  <MainLayout>
    <SidebarContent
      slot="sidebar"
      :avatar-src="require('@/assets/images/avatar.jpg')"
      firstname="Seksan"
      lastname="Neramitthanasombat"
      position="Front-End Developer"
    >
    </SidebarContent>
    <Navbar slot="navbar">
      <NavbarItem to="/" exact icon="user">About Me</NavbarItem>
      <NavbarItem to="/education" icon="user-graduate">Education</NavbarItem>
      <NavbarItem to="/experience" icon="history">Experience</NavbarItem>
      <NavbarItem to="/working-experience" icon="briefcase">Working Experience</NavbarItem>
      <NavbarItem to="/skills" icon="star">Skills</NavbarItem>
    </Navbar>
    <router-view />
  </MainLayout>
</template>

<script>
import { MainLayout } from '@/components/layout/main-layout'
import { SidebarContent } from '@/components/content/sidebar-content'
import { Navbar, NavbarItem } from '@/components/layout/navbar'

export default {
  components: { MainLayout, SidebarContent, Navbar, NavbarItem },

  metaInfo: {
    titleTemplate: '%s - Seksan Neramitthanasombat',
    meta: [
      { vmid: 'description', name: 'description', content: "A Seksan Neramitthanasombat's CV" },
      {
        vmid: 'keywords',
        name: 'keywords',
        content: ['seksan', 'neramitthanasombat', 'nekomania420', 'cv', 'resume'],
      },
      {
        vmid: 'robots',
        name: 'robots',
        content: ['index', 'follow'],
      },
      {
        vmid: 'og:url',
        property: 'og:url',
        content: location.origin,
      },
      {
        vmid: 'og:title',
        property: 'og:title',
        content: 'Seksan Neramitthanasombat',
      },
      {
        vmid: 'og:description',
        property: 'og:description',
        content: "A Seksan Neramitthanasombat's CV",
      },
      {
        vmid: 'og:image',
        property: 'og:image',
        content: location.origin + require('@/assets/images/avatar.jpg'),
      },
    ],
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
</style>
