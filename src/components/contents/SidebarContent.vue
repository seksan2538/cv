<script>
import { AppAvatar, AppBadge } from '@/components/ui'

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
