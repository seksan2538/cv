import { Heading } from '../heading'
import styles from './page-title.module.scss'

export default {
  functional: true,

  name: 'PageTitle',

  render(h, { data, children }) {
    return (
      <Heading {...data} level={2} class={styles.text}>
        {children}
      </Heading>
    )
  },
}
