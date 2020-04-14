import styles from './card.module.scss'

export default {
  functional: true,

  name: 'Card',

  props: {
    title: {
      type: String,
    },
  },

  render(h, { data, props, slots, scopedSlots }) {
    return (
      <div {...data} class={styles.card}>
        {props.title && (
          <div class={styles.header}>
            <h4 class={styles.headerText}>
              {scopedSlots.title ? scopedSlots.title(props.title) : props.title}
            </h4>
          </div>
        )}
        <div class={styles.body}>{slots().default}</div>
        {slots().footer && <div class={styles.footer}>{slots().footer}</div>}
      </div>
    )
  },
}
