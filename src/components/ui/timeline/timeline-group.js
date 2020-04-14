import TimelineLabel from './timeline-label'
import styles from './timeline.module.scss'

export default {
  functional: true,

  name: 'TimelineGroup',

  props: {
    label: {
      type: String,
    },
  },

  render(h, { props, children }) {
    return [
      <TimelineLabel>{props.label}</TimelineLabel>,
      <div class={styles.itemGroup}>{children}</div>,
    ]
  },
}
