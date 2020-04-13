import styles from './timeline.module.scss'

export default {
  functional: true,

  name: 'TimelineItem',

  render(h, { data, slots }) {
    return (
      <div {...data} class={styles.item}>
        <div class={[styles.itemBody, styles.main]}>{slots().default}</div>
        <div class={styles.itemDivider}></div>
        <div class={[styles.itemBody, styles.opposite]}>{slots().opposite}</div>
      </div>
    )
  },
}
