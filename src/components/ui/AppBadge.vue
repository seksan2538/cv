<script>
export default {
  functional: true,

  props: {
    variant: {
      type: String,
      default: 'dark',
    },
  },

  render(h, { data, props, children, $style }) {
    return (
      <span {...data} class={[$style.badge, { [$style[`--${props.variant}`]]: props.variant }]}>
        {children}
      </span>
    )
  },
}
</script>

<style lang="scss" module>
.badge {
  padding: 0.25em 0.5em;

  &.--primary {
    background-color: var(--primary-color);
    color: var(--dark-color);
  }

  &.--secondary {
    background-color: var(--secondary-color);
    color: var(--dark-color);
  }

  &.--tertiary {
    background-color: var(--tertiary-color);
    color: var(--light-color);
  }

  &.--dark {
    background-color: var(--dark-color);
    color: var(--light-color);
  }

  &.--light {
    background-color: var(--light-color);
    color: var(--dark-color);
  }
}
</style>
