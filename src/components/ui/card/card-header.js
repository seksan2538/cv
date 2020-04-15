import styles from './card.module.scss'

export default {
  functional: true,

  name: 'CardHeader',

  render(h, { data, children }) {
    return (
      <div {...data} class={styles.header}>
        {children}
      </div>
    )
  },
}
