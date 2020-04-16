import styles from './link.module.scss'

export default {
  name: 'Link',
  functional: true,
  render(h, { data, children }) {
    return (
      <a {...data} class={styles.link}>
        {children}
      </a>
    )
  },
}
