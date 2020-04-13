import styles from './card.module.scss'

export default {
  functional: true,

  name: 'Card',

  props: {
    title: {
      type: String,
    },
  },

  render(h, { data, props, slots }) {
    return (
      <div {...data} class={styles.card}>
        <div class={styles.header}>
          <h4 class={styles.headerText}>{props.title}</h4>
        </div>
        <div class={styles.body}>{slots().default}</div>
      </div>
    )
  },
}
