<template>
  <div>
    <page-title>Education</page-title>
    <app-timeline>
      <app-timeline-item v-for="(item, itemIndex) in items" :key="itemIndex">
        <app-card class="d-inline-block">
          <app-card-header>
            <app-card-title>{{ item.yearRange[0] }}–{{ item.yearRange[1] }}</app-card-title>
          </app-card-header>
          <app-card-body>
            <p>
              <strong>{{ item.name }}</strong>
            </p>
            <p class="mb-0">GPA: {{ item.gpa }}</p>
          </app-card-body>
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
  },

  data() {
    return {
      items: [
        {
          yearRange: [2014, 2018],
          name: "King Mongkut's Institute of Technology Ladkrabang",
          gpa: 2.54,
        },
        {
          yearRange: [2008, 2014],
          name: 'Benjamarachutit Ratchaburi School',
          gpa: 2.91,
        },
      ],
    }
  },
}
</script>
