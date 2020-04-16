<template>
  <div>
    <PageTitle>Experience</PageTitle>
    <Timeline>
      <TimelineGroup v-for="group in groups" :key="group.label" :label="group.label">
        <TimelineItem v-for="(item, itemIndex) in group.items" :key="itemIndex">
          <Card class="d-inline-block">
            <CardHeader>
              <CardTitle v-html="item.title"></CardTitle>
            </CardHeader>
            <CardBody>
              <p class="mb-0" v-html="item.description"></p>
            </CardBody>
            <CardFooter>
              <div class="d-inline-block">
                <font-awesome-icon class="mr-1" icon="medal" />{{ item.position }}
              </div>
              /
              <div class="d-inline-block">
                <font-awesome-icon class="mr-1" icon="map-marker-alt" />{{ item.location }}
              </div>
            </CardFooter>
          </Card>
        </TimelineItem>
      </TimelineGroup>
    </Timeline>
  </div>
</template>

<script>
import { PageTitle } from '@/components/ui/page-title'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '@/components/ui/card'
import { Timeline, TimelineItem, TimelineGroup } from '@/components/ui/timeline'

export default {
  components: {
    PageTitle,
    Timeline,
    TimelineItem,
    TimelineGroup,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
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
