import styles from './heading.module.scss'

export default {
  name: 'Heading',
  functional: true,
  props: {
    level: Number,
  },
  render(h, { data, props, children }) {
    const H = `h${props.level}`
    return (
      <H {...data} class={styles.heading}>
        {children}
      </H>
    )
  },
}
