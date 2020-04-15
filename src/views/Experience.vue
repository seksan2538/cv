<template>
  <div>
    <page-title>Experience</page-title>
    <app-timeline>
      <app-timeline-group v-for="group in groups" :key="group.label" :label="group.label">
        <app-timeline-item v-for="(item, itemIndex) in group.items" :key="itemIndex">
          <app-card class="d-inline-block">
            <app-card-header>
              <app-card-title v-html="item.title"></app-card-title>
            </app-card-header>
            <app-card-body>
              <p class="mb-0" v-html="item.description"></p>
            </app-card-body>
            <app-card-footer>
              <div class="d-inline-block">
                <font-awesome-icon class="mr-1" icon="medal" />{{ item.position }}
              </div>
              /
              <div class="d-inline-block">
                <font-awesome-icon class="mr-1" icon="map-marker-alt" />{{ item.location }}
              </div>
            </app-card-footer>
          </app-card>
        </app-timeline-item>
      </app-timeline-group>
    </app-timeline>
  </div>
</template>

<script>
import {
  PageTitle,
  AppTimeline,
  AppTimelineItem,
  AppTimelineGroup,
  AppCard,
  AppCardHeader,
  AppCardTitle,
  AppCardBody,
  AppCardFooter,
} from '@/components/ui'

export default {
  components: {
    PageTitle,
    AppTimeline,
    AppTimelineItem,
    AppTimelineGroup,
    AppCard,
    AppCardHeader,
    AppCardTitle,
    AppCardBody,
    AppCardFooter,
  },

  data() {
    return {
      groups: [
        {
          label: '2015',
          items: [
            {
              title: 'Pre-Programming Course',
              location: 'IT KMITL',
              position: 'Teacher Assistant',
              description: 'Python programming',
            },
            {
              title: 'IT CAMP 11',
              location: 'IT KMITL',
              position: 'Teacher Assistant',
              description: 'Charming Application section⁠—Create application using Visual Studio',
            },
            {
              title: 'On-Site Round, ACM ICPC 2015',
              location: 'Chulalongkorn University',
              position: 'Contender',
              description: 'Problem solving challenge',
            },
          ],
        },
        {
          label: '2011',
          items: [
            {
              title: '12<sup>th</sup> National Linux Competition',
              location: 'Fashion Island',
              position: 'Finalist',
              description: '3<sup>rd</sup> prize, Linux server',
            },
          ],
        },
        {
          label: '2010',
          items: [
            {
              title: '11<sup>th</sup> National Linux Competition',
              location: 'Fashion Island',
              position: 'Finalist',
              description: '2<sup>nd</sup> prize, Linux client',
            },
          ],
        },
      ],
    }
  },
}
</script>
