<template>
  <div>
    <page-title>Working Experience</page-title>
    <app-timeline>
      <app-timeline-item>
        <app-card class="d-inline-block" title="???">
          <app-card-header>
            <app-card-title>???</app-card-title>
          </app-card-header>
          <app-card-body>
            <p class="mb-0">Coming soon...</p>
          </app-card-body>
        </app-card>
      </app-timeline-item>
      <app-timeline-item v-for="(item, itemIndex) in items" :key="itemIndex">
        <app-card class="d-inline-block">
          <app-card-header>
            <app-card-title>{{ item.title }}</app-card-title>
          </app-card-header>
          <app-card-body>
            <p class="mb-0">{{ item.position }}</p>
          </app-card-body>
          <app-card-footer>
            <div class="d-inline-block">
              <font-awesome-icon class="mr-2" icon="map-marker-alt" />
              <a :href="item.website" target="_blank">{{ item.location }}</a>
            </div>
          </app-card-footer>
        </app-card>
      </app-timeline-item>
    </app-timeline>
  </div>
</template>

<script>
import {
  PageTitle,
  AppTimeline,
  AppTimelineItem,
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
    AppCard,
    AppCardHeader,
    AppCardTitle,
    AppCardBody,
    AppCardFooter,
  },

  data() {
    return {
      items: [
        {
          title: 'Jun 2018–Mar 2020',
          location: '2 3 Perspective Co., Ltd.',
          position: 'Front-End Developer',
          website: 'https://www.23perspective.com/',
        },
        {
          title: 'Jul 2017–Nov 2017',
          location: 'Innovative Marketing Communication Co., Ltd.',
          position: 'Web Developer (Cooperative Education Student)',
          website: 'https://www.imcthai.com/',
        },
      ],
    }
  },
}
</script>
