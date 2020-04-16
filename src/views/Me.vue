<template>
  <div>
    <PageTitle>Me</PageTitle>
    <blockquote>
      <p
        v-for="(quote, quoteIndex) in quotes"
        :key="quoteIndex"
        :class="{ 'mb-0': quoteIndex === quotes.length - 1 }"
        v-html="quote"
      ></p>
    </blockquote>
    <b-row class="mb-3">
      <b-col :md="6" class="mb-3 mb-md-0">
        <Card>
          <CardHeader>
            <CardTitle>Information</CardTitle>
          </CardHeader>
          <CardBody>
            <b-row class="text-center" :style="{ marginBottom: '-1rem' }">
              <b-col v-for="(item, itemIndex) in infoItems" :key="itemIndex" class="pb-3">
                <IconSign>
                  <IconSignIcon :icon="item.icon" size="3x" />
                  <IconSignText>{{ item.text }}</IconSignText>
                </IconSign>
              </b-col>
            </b-row>
          </CardBody>
        </Card>
      </b-col>
      <b-col :md="6">
        <Card>
          <CardHeader>
            <CardTitle>Hobbies</CardTitle>
          </CardHeader>
          <CardBody>
            <ul class="list-unstyled mb-0">
              <li v-for="(item, itemIndex) in hobbies" :key="itemIndex" class="d-flex">
                <font-awesome-icon :icon="item.icon" fixed-width class="mr-2" />
                {{ item.text }}
              </li>
            </ul>
          </CardBody>
        </Card>
      </b-col>
    </b-row>
    <b-row>
      <b-col :md="6" class="mb-3 mb-md-0">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardBody>
            <b-row class="text-center" :style="{ marginBottom: '-1rem' }">
              <b-col v-for="(item, itemIndex) in contactItems" :key="itemIndex" class="pb-3">
                <a :href="item.link" target="_blank">
                  <IconSign>
                    <IconSignIcon :icon="item.icon" size="3x" />
                    <IconSignText>{{ item.text }}</IconSignText>
                  </IconSign>
                </a>
              </b-col>
            </b-row>
          </CardBody>
        </Card>
      </b-col>
      <b-col :md="6">
        <Card>
          <CardHeader>
            <CardTitle>SNS</CardTitle>
          </CardHeader>
          <CardBody>
            <b-row class="text-center" :style="{ marginBottom: '-1rem' }">
              <b-col v-for="(item, itemIndex) in socialNetworks" :key="itemIndex" class="pb-3">
                <a :href="item.link" target="_blank">
                  <IconSign>
                    <IconSignIcon :icon="item.icon" size="3x" />
                  </IconSign>
                </a>
              </b-col>
            </b-row>
          </CardBody>
        </Card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { IconSign, IconSignIcon, IconSignText } from '@/components/content/icon-sign'
import { Card, CardHeader, CardTitle, CardBody } from '@/components/ui/card'
import { PageTitle } from '@/components/ui/page-title'

export default {
  name: 'Me',

  components: {
    PageTitle,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    IconSign,
    IconSignIcon,
    IconSignText,
  },

  data() {
    return {
      quotes: [
        "I love about coding because I need to challenge with difficulty that comes from either known or unknown things. I've been interested about web development for several years and this is on my way because I want to make online world to be colorful.",
        "Starting for learning something maybe hard sometime, but I won't give up because nothing is impossible.",
      ],
      infoItems: [
        {
          icon: 'birthday-cake',
          text: 'Oct. 4, 1995',
        },
        {
          icon: 'home',
          text: 'Damnoen Saduak, Ratchaburi',
        },
      ],
      hobbies: [
        {
          icon: 'headphones',
          text: 'Listen to my favorite musics.',
        },
        {
          icon: 'code',
          text: 'Learn and practice about coding sometime.',
        },
        {
          icon: ['fab', 'youtube'],
          text: 'Watch video on YouTube.',
        },
        {
          icon: 'gamepad',
          text: 'Play some games, especially FPS and music/rhythm games.',
        },
      ],
      contactItems: [
        {
          icon: 'phone',
          text: '087-664-6052',
          link: 'tel:0876646052',
        },
        {
          icon: 'envelope',
          text: 'sek.cgnz@gmail.com',
          link: 'mailto:sek.cgnz@gmail.com',
        },
      ],
      socialNetworks: [
        {
          link: 'https://www.facebook.com/nekomania420',
          icon: ['fab', 'facebook'],
        },
        {
          link: 'https://twitter.com/NekoMania420',
          icon: ['fab', 'twitter'],
        },
        {
          link: 'https://line.me/ti/p/~seksan2538',
          icon: ['fab', 'line'],
        },
        {
          link: 'https://github.com/seksan2538',
          icon: ['fab', 'github'],
        },
        {
          link: 'https://www.linkedin.com/in/nekomania420',
          icon: ['fab', 'linkedin'],
        },
      ],
    }
  },
}
</script>
