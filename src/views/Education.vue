<template>
  <div>
    <page-title>Education</page-title>
    <app-timeline>
      <app-timeline-item v-for="(item, itemIndex) in items" :key="itemIndex">
        <app-card class="d-inline-block" :title="`${item.yearRange[0]}–${item.yearRange[1]}`">
          <p>
            <strong>{{ item.name }}</strong>
          </p>
          <p class="mb-0">GPA: {{ item.gpa }}</p>
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
