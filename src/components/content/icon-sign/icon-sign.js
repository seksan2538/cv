import styles from './icon-sign.module.scss'

export const IconSign = {
  name: 'IconSign',
  functional: true,
  render(h, { data, children }) {
    return (
      <div {...data} class={styles.wrapper}>
        {children}
      </div>
    )
  },
}
