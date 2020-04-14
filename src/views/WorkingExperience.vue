<template>
  <div>
    <page-title>Working Experience</page-title>
    <app-timeline>
      <app-timeline-item>
        <app-card class="d-inline-block" title="???">
          <p class="mb-0">Coming soon...</p>
        </app-card>
      </app-timeline-item>
      <app-timeline-item v-for="(item, itemIndex) in items" :key="itemIndex">
        <app-card class="d-inline-block" :title="item.title">
          <p class="mb-0">{{ item.position }}</p>
          <template slot="footer">
            <div class="d-inline-block">
              <font-awesome-icon class="mr-2" icon="map-marker-alt" />
              <a :href="item.website" target="_blank">{{ item.location }}</a>
            </div>
          </template>
        </app-card>
      </app-timeline-item>
    </app-timeline>
  </div>
</template>

<script>
import { PageTitle, AppTimeline, AppTimelineItem, AppCard } from '@/components/ui'

export default {
  components: {
    PageTitle,
    AppTimeline,
    AppTimelineItem,
    AppCard,
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
