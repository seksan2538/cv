<script>
export default {
  functional: true,

  render(h, { data, children, $style }) {
    return (
      <ul {...data} class={$style.list}>
        {children.map((child) => (
          <li class={$style.item}>{child}</li>
        ))}
      </ul>
    )
  },
}
</script>

<style lang="scss" module>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: rgba($secondary-color, 0.5);
  backdrop-filter: blur(0.5rem);
  white-space: nowrap;
  overflow-x: auto;
}

.item {
  flex: 1;
}
</style>
