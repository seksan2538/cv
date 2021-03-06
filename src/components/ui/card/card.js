import styles from './card.module.scss'

export default {
  functional: true,

  name: 'Card',

  render(h, { data, children }) {
    return (
      <div {...data} class={styles.card}>
        {children}
      </div>
    )
  },
}
