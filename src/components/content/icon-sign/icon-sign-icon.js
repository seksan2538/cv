import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = FontAwesomeIcon.props
props.fixedWidth.default = true

export { props }

export const IconSignIcon = {
  name: 'IconSignIcon',
  functional: true,
  props,
  render(h, ctx) {
    return h(FontAwesomeIcon, { ...ctx.data, props: ctx.props })
  },
}
