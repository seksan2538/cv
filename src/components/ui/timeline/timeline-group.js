export default {
  functional: true,

  name: 'TimelineGroup',

  props: {
    label: {
      type: String,
    },
  },

  render(h, { props, children }) {
    return [<AppTimelineLabel>{props.label}</AppTimelineLabel>, <div>{children}</div>]
  },
}
