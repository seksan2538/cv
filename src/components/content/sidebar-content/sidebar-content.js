import { Avatar } from '../../ui/avatar'
import { Badge } from '../../ui/badge'
import { Heading } from '../../ui/heading'
import styles from './sidebar-content.module.scss'

export default {
  name: 'SidebarContent',
  functional: true,
  props: {
    avatarSrc: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    position: {
      type: String,
    },
  },
  render(h, { data, props, slots }) {
    return (
      <div {...data} class={styles.content}>
        <Avatar class={[styles.avatar, 'mx-auto', 'mr-lg-0']} src={props.avatarSrc} />
        <Heading level={1} class={[styles.name, 'text-uppercase', 'text-wrap', 'mt-3']}>
          {props.firstname}
          <br />
          {props.lastname}
        </Heading>
        <div class={['mt-2', 'text-uppercase']}>
          <Badge>{props.position}</Badge>
        </div>
        <div class={['mt-3']}>{slots().default}</div>
      </div>
    )
  },
}
