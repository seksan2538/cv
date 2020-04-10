<script>
export default {
  functional: true,

  props: {
    src: {
      type: String,
    },
  },

  render(h, { data, props, $style }) {
    return <img {...data} class={$style.avatar} src={props.src} />
  },
}
</script>

<style lang="scss" module>
.avatar {
  max-width: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: block;
}
</style>
