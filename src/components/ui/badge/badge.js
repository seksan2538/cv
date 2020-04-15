import styles from './badge.module.scss'

export default {
  functional: true,

  name: 'Badge',

  props: {
    variant: {
      type: String,
      default: 'dark',
    },
  },

  render(h, { data, props, children }) {
    return (
      <span {...data} class={[styles.badge, { [styles[props.variant]]: props.variant }]}>
        {children}
      </span>
    )
  },
}
