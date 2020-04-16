import styles from './quote.module.scss'

export default {
  name: 'Quote',
  functional: true,
  render(h, { data, children }) {
    return (
      <blockquote {...data} class={styles.quote}>
        {children}
      </blockquote>
    )
  },
}
