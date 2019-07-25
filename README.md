# react-whatsapp-badge

> Click to chat Whatsapp badge

[![NPM](https://img.shields.io/npm/v/react-whatsapp-badge.svg)](https://www.npmjs.com/package/react-whatsapp-badge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![demo](https://raw.githubusercontent.com/felops/react-whatsapp-badge/master/assets/gif.gif)

## Install

```bash
npm install --save react-whatsapp-badge
```

## Usage

```jsx
import React, { Component } from 'react'
import WhatsappBadge from 'react-whatsapp-badge'

class Example extends Component {
  render () {
    return (
      <WhatsappBadge text='Hello there' phone='55123456789' image='whatsapp.png' />
    )
  }
}
```

[More info about Whatsapp click to chat](https://faq.whatsapp.com/en/android/26000030)

### Options

| Parameter     | Required      | Desciption    |
| ------------- | ------------- | ------------- |
| text      | yes | Text to display on input when open chat |
| phone     | yes | Phone number with country code to send message (only number) |  
| image     | yes | Image to display on badge (download this file and save on public folder: [img](https://raw.githubusercontent.com/felops/react-whatsapp-badge/master/example/public/whatsapp.png)) |

## License

MIT © [felops](https://github.com/felops)
