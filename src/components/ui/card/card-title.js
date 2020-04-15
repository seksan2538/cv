import styles from './card.module.scss'

export default {
  functional: true,

  name: 'CardTitle',

  render(h, { data, children }) {
    return (
      <h4 {...data} class={styles.headerText}>
        {children}
      </h4>
    )
  },
}
