<template>
  <div>
    <page-title>Skills</page-title>
    <h3>Technical</h3>
    <b-row class="mb-4">
      <b-col v-for="(item, itemIndex) in technicalSkills" :key="itemIndex" class="mb-3" :sm="4">
        <app-card :style="{ boxShadow: `0.125rem 0.125rem ${item.color}` }">
          <app-card-body>
            <app-card-title class="mb-2" :style="{ color: item.color }">{{
              item.title
            }}</app-card-title>
            <app-gauge
              :max="maxGauge"
              :value="item.value"
              :color="item.color"
              :border-color="item.color"
            />
          </app-card-body>
        </app-card>
      </b-col>
    </b-row>
    <h3>Non-Technical</h3>
    <b-row class="mb-4">
      <b-col v-for="(item, itemIndex) in nonTechnicalSkills" :key="itemIndex" class="mb-3" :sm="4">
        <app-card>
          <app-card-body>
            <app-card-title class="mb-2" :style="{ color: 'white' }">{{
              item.title
            }}</app-card-title>
            <app-gauge :max="maxGauge" :value="item.value" />
          </app-card-body>
        </app-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Color from 'color'
import { PageTitle, AppGauge, AppCard, AppCardTitle, AppCardBody } from '@/components/ui'

export default {
  name: 'Skills',

  components: {
    PageTitle,
    AppGauge,
    AppCard,
    AppCardTitle,
    AppCardBody,
  },

  data() {
    return {
      maxGauge: 5,
      technicalSkills: [
        {
          title: 'HTML5',
          color: '#ec6231',
          value: 5,
        },
        {
          title: 'CSS',
          color: '#264de4',
          value: 5,
        },
        {
          title: 'JavaScript',
          color: '#f7e018',
          value: 4,
        },
        {
          title: 'TypeScript',
          color: '#007acc',
          value: 3,
        },
        {
          title: 'PHP',
          color: '#8892bf',
          value: 2,
        },
        {
          title: 'Python',
          color: '#00599c',
          value: 3,
        },
        {
          title: 'MySQL',
          color: '#00758f',
          value: 2,
        },
        {
          title: 'MongoDB',
          color: '#13aa52',
          value: 2,
        },
        {
          title: 'Vue.js',
          color: '#41b883',
          value: 4,
        },
        {
          title: 'React',
          color: '#61dafb',
          value: 2,
        },
        {
          title: 'Angular',
          color: '#dd0031',
          value: 2,
        },
        {
          title: 'RESTful',
          color: '#ffffff',
          value: 4,
        },
        {
          title: 'Responsive Design',
          color: '#ffffff',
          value: 4,
        },
        {
          title: 'Git',
          color: '#ef5132',
          value: 3,
        },
        {
          title: 'Unit Testing',
          color: '#ffffff',
          value: 1,
        },
      ],
      nonTechnicalSkills: [
        {
          title: 'Communication',
          value: 3,
        },
        {
          title: 'Team Working',
          value: 3,
        },
        {
          title: 'Problem Solving',
          value: 3,
        },
      ],
    }
  },
}
</script>
