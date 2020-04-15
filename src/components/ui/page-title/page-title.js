import styles from './page-title.module.scss'

export default {
  functional: true,

  name: 'PageTitle',

  render(h, { data, children }) {
    return (
      <h2 {...data} class={styles.text}>
        {children}
      </h2>
    )
  },
}
