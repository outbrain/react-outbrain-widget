# react-outbrain-widget
![](https://github.com/outbrain/react-outbrain-widget/blob/master/ob-react.svg
)

Embed your outbrain widget inside a react app 

[![npm version](https://badge.fury.io/js/react-outbrain-widget.svg)](https://badge.fury.io/js/react-outbrain-widget)

## Demo

[**Live Demo**](https://codesandbox.io/s/54m7mo4o8p)

## Installation & Usage
**Note:** *react-outbrain-widget assumes outbrain.js was loaded before react's first rendering. Please make sure outbrain.js is loaded via a <script> tag on the app's index.html*

```sh
npm install react-outbrain-widget --save
```

### Include the Component

```js
import React from 'react'
import { OutbrainWidget } from 'react-outbrain-widget'

class Component extends React.Component {

  render() {
    return <OutbrainWidget dataSrc='mySite.com' dataWidgetId='AR_1'/>
  }
}
```
## Props
Name                   | Type 
-----------------------|----------:
**dataSrc**            |string
**dataWidgetId**       |string
**obTemplate**         |string
**obInstallationKey**  |string
**obInstallationType** |string
**obAppVer**           |string
**isSecured**          |string
