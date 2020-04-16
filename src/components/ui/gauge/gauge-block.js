import styles from './gauge.module.scss'

export default {
  functional: true,

  name: 'GaugeBlock',

  props: {
    active: Boolean,
    color: {
      type: String,
      default: 'var(--primary-color)',
    },
    borderColor: {
      type: String,
      default: 'var(--primary-color)',
    },
  },

  render(h, { data, props }) {
    return (
      <div class={styles.blockWrapper}>
        <div
          {...data}
          class={[styles.block, { [styles.active]: props.active }]}
          style={{ backgroundColor: props.color, borderColor: props.borderColor }}
        ></div>
      </div>
    )
  },
}
