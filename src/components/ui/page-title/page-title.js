import styles from './page-title.module.scss'

export default {
  functional: true,

  render(h, { data, children }) {
    return (
      <h2 {...data} class={styles.text}>
        {children}
      </h2>
    )
  },
}
