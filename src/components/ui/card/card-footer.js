import styles from './card.module.scss'

export default {
  functional: true,

  name: 'CardFooter',

  render(h, { data, children }) {
    return (
      <div {...data} class={styles.footer}>
        {children}
      </div>
    )
  },
}
