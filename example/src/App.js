import React, { Component } from 'react'
import WhatsappBadge from 'react-whatsapp-badge'

export default class App extends Component {
  render () {
    return (
      <div>
        <WhatsappBadge text='Hello there' phone={55123456789} image='whatsapp.png' />
      </div>
    )
  }
}
