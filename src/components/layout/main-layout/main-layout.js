import styles from './main-layout.module.scss'

export default {
  name: 'MainLayout',
  functional: true,
  render(h, { data, slots }) {
    return (
      <div {...data} class={styles.layout}>
        <nav class={styles.navbar}>{slots().navbar}</nav>
        <aside class={styles.sidebar}>
          <b-container fluid class="my-auto py-3">
            {slots().sidebar}
          </b-container>
        </aside>
        <main class={styles.main}>
          <b-container class="py-3">{slots().default}</b-container>
        </main>
      </div>
    )
  },
}
