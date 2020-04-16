import styles from './timeline.module.scss'

export default {
  functional: true,

  name: 'TimelineLabel',

  render(h, { data, children }) {
    return (
      <div {...data} class={styles.label}>
        <div class={styles.labelContainer}>{children}</div>
      </div>
    )
  },
}
