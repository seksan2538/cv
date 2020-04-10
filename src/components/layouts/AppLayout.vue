<script>
export default {
  functional: true,

  render(h, { data, slots, $style }) {
    return (
      <div {...data} class={$style.layout}>
        <nav class={$style.navbar}>{slots().navbar}</nav>
        <aside class={$style.sidebar}>
          <b-container fluid class="my-auto py-3">
            {slots().sidebar}
          </b-container>
        </aside>
        <main class={$style.main}>
          <b-container fluid>{slots().default}</b-container>
        </main>
      </div>
    )
  },
}
</script>

<style lang="scss" module>
.sidebar {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 25%;
  background-color: var(--primary-color);
  color: var(--dark-color);
  overflow: hidden auto;

  @include media-breakpoint-down(md) {
    position: static;
    top: auto;
    left: auto;
    bottom: auto;
    width: auto;
  }
}

.main {
  margin-left: 25%;
  margin-bottom: 5rem;

  @include media-breakpoint-down(md) {
    margin-left: auto;
  }
}

.navbar {
  position: fixed;
  left: 25%;
  right: 0;
  bottom: 0;
  z-index: 10;

  @include media-breakpoint-down(md) {
    left: 0;
  }
}
</style>
