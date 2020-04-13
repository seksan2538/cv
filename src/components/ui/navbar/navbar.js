import styles from './navbar.module.scss'

export default {
  functional: true,

  render(h, { data, children }) {
    return (
      <ul {...data} class={styles.list}>
        {children.map((child) => (
          <li class={styles.item}>{child}</li>
        ))}
      </ul>
    )
  },
}
