import styles from './timeline.module.scss'

export default {
  functional: true,

  name: 'TimelineLabel',

  render(h, { data, children }) {
    return (
      <h3 {...data} class={styles.label}>
        <div class={styles.labelContainer}>{children}</div>
      </h3>
    )
  },
}
