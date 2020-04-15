import styles from './avatar.module.scss'

export default {
  functional: true,

  name: 'Avatar',

  props: {
    src: {
      type: String,
    },
  },

  render(h, { data, props }) {
    return <img {...data} class={styles.avatar} src={props.src} />
  },
}
