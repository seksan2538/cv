import styles from './avatar.module.scss'

export default {
  functional: true,

  props: {
    src: {
      type: String,
    },
  },

  render(h, { data, props }) {
    return <img {...data} class={styles.avatar} src={props.src} />
  },
}
