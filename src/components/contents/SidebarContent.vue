<!--<template>
  <div :class="$style.content">
    <app-avatar :class="$style.avatar" class="ml-auto" :src="avatar"></app-avatar>
    <h1 :class="$style.name" class="text-right text-uppercase text-wrap mt-3">
      {{ name.first }}
      <br />
      {{ name.last }}
    </h1>
    <div class="mt-2 text-right text-uppercase">
      <app-badge>
        Front-End Developer
      </app-badge>
    </div>
    <p class="mt-3 text-right">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quis minima eligendi
      repudiandae, sequi dolorum fuga voluptatibus cumque dicta velit?
    </p>
  </div>
</template>-->

<script>
import AppAvatar from '../ui/AppAvatar'
import AppBadge from '../ui/AppBadge'

export default {
  functional: true,

  props: {
    avatarSrc: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    position: {
      type: String,
    },
  },

  render(h, { data, props, slots, $style }) {
    return (
      <div {...data} class={$style.content}>
        <AppAvatar class={[$style.avatar, 'ml-auto']} src={props.avatarSrc} />
        <h1 class={[$style.name, 'text-right', 'text-uppercase', 'text-wrap', 'mt-3']}>
          {props.firstname}
          <br />
          {props.lastname}
        </h1>
        <div class={['mt-2', 'text-right', 'text-uppercase']}>
          <AppBadge>{props.position}</AppBadge>
        </div>
        <p class={['mt-3', 'text-right']}>{slots().default}</p>
      </div>
    )
  },
}
</script>

<style lang="scss" module>
.avatar {
  width: 10rem;
}

.name {
  text-shadow: none;
  color: inherit;

  @include media-breakpoint-up(lg) {
    font-size: 1.8vw;
  }
}
</style>
