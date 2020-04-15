import styles from './navbar.module.scss'

export default {
  functional: true,

  name: 'NavbarItem',

  props: {
    to: {
      type: [String, Object],
    },
    icon: {
      type: [String, Array],
    },
  },

  render(h, { data, props, children }) {
    return (
      <router-link {...data} class={styles.link} to={props.to}>
        <div class={styles.container}>
          {props.icon && <font-awesome-icon class={styles.icon} icon={props.icon} size="lg" />}
          <div class={styles.label}>{children}</div>
        </div>
      </router-link>
    )
  },
}
