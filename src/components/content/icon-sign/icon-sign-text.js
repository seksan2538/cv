import styles from './icon-sign.module.scss'

export const IconSignText = {
  name: 'IconSignText',
  functional: true,
  render(h, { data, children }) {
    return (
      <div {...data} class={styles.text}>
        {children}
      </div>
    )
  },
}
