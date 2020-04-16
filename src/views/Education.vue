<template>
  <div>
    <PageTitle>Education</PageTitle>
    <Timeline>
      <TimelineItem v-for="(item, itemIndex) in items" :key="itemIndex">
        <Card class="d-inline-block">
          <CardHeader>
            <CardTitle>{{ item.yearRange[0] }}–{{ item.yearRange[1] }}</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              <strong>{{ item.name }}</strong>
            </p>
            <p class="mb-0">GPA: {{ item.gpa }}</p>
          </CardBody>
        </Card>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
import { PageTitle } from '@/components/ui/page-title'
import { Card, CardHeader, CardTitle, CardBody } from '@/components/ui/card'
import { Timeline, TimelineItem } from '@/components/ui/timeline'

export default {
  components: {
    PageTitle,
    Timeline,
    TimelineItem,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
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
