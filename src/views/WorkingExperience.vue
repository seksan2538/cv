<template>
  <div>
    <PageTitle>Working Experience</PageTitle>
    <Timeline>
      <TimelineItem>
        <Card class="d-inline-block" title="???">
          <CardHeader>
            <CardTitle>???</CardTitle>
          </CardHeader>
          <CardBody>
            <p class="mb-0">Coming soon...</p>
          </CardBody>
        </Card>
      </TimelineItem>
      <TimelineItem v-for="(item, itemIndex) in items" :key="itemIndex">
        <Card class="d-inline-block">
          <CardHeader>
            <CardTitle>{{ item.title }}</CardTitle>
          </CardHeader>
          <CardBody>
            <p class="mb-0">{{ item.position }}</p>
          </CardBody>
          <CardFooter>
            <div class="d-inline-block">
              <font-awesome-icon class="mr-2" icon="map-marker-alt" />
              <a :href="item.website" target="_blank">{{ item.location }}</a>
            </div>
          </CardFooter>
        </Card>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
import { PageTitle } from '@/components/ui/page-title'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '@/components/ui/card'
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
    CardFooter,
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
