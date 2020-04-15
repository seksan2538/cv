import styles from './card.module.scss'

export default {
  functional: true,

  name: 'CardBody',

  render(h, { data, children }) {
    return (
      <div {...data} class={styles.body}>
        {children}
      </div>
    )
  },
}
