import styles from './timeline.module.scss'

export default {
  functional: true,

  name: 'Timeline',

  render(h, { data, children }) {
    return (
      <div {...data} class={styles.timeline}>
        {children}
      </div>
    )
  },
}
