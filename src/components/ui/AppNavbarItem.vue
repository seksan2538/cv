<script>
export default {
  functional: true,

  props: {
    to: {
      type: [String, Object],
    },
    icon: {
      type: [String, Array],
    },
  },

  render(h, { data, props, children, $style }) {
    return (
      <router-link {...data} class={$style.link} to={props.to}>
        <div class={$style.container}>
          {props.icon && <font-awesome-icon class={$style.icon} icon={props.icon} size="lg" />}
          <div class={$style.label}>{children}</div>
        </div>
      </router-link>
    )
  },
}
</script>

<style lang="scss" module>
.link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none !important;
  height: 100%;
  padding: 0.25rem 0.5rem;
  color: var(--light-color);
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    width: 0;
    background-color: rgba($dark-color, 0.5);
    transition: all 0.25s ease-out;
    transform: translateX(-50%);
    opacity: 0;
  }

  &:hover {
    color: var(--light-color);
    &::before {
      width: 100%;
      opacity: 1;
    }
  }
}

.container {
  z-index: 1;
}

.icon {
  display: block;
  margin: 0 auto;
}

.label {
  margin-top: 0.25rem;
}
</style>
