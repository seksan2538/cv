import { Heading } from '../heading'
import styles from './card.module.scss'

export default {
  functional: true,

  name: 'CardTitle',

  render(h, { data, children }) {
    return (
      <Heading {...data} level={4} class={styles.headerText}>
        {children}
      </Heading>
    )
  },
}
