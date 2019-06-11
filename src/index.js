import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class WhatsappBadge extends Component {
  static propTypes = {
    phone: PropTypes.number,
    text: PropTypes.string,
    image: PropTypes.string
  }

  render = () =>
    <a href={'https://wa.me/' + this.props.phone + '?text=' + this.props.text}>
      <div className={styles.badge} style={{ backgroundImage: 'url(' + this.props.image + ')' }} />
    </a>
}
