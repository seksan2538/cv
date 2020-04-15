import GaugeBlock from './gauge-block'
import styles from './gauge.module.scss'

export default {
  functional: true,

  name: 'Gauge',

  props: {
    max: {
      type: Number,
    },
    value: {
      type: Number,
    },
    ...GaugeBlock.props,
  },

  render(h, { data, props, scopedSlots }) {
    const blocks = []

    for (let i = 0; i < props.max; i++) {
      blocks.push(
        <GaugeBlock
          color={i < props.value ? props.color : null}
          borderColor={props.borderColor}
        ></GaugeBlock>
      )
    }

    return (
      <div {...data} class={styles.gauge}>
        {scopedSlots.default ? scopedSlots.default(props) : blocks}
      </div>
    )
  },
}
