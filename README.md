# react-outbrain-widget

![](https://github.com/outbrain/react-outbrain-widget/blob/master/ob-react.svg)

Embed your outbrain widget inside a react app

[![npm version](https://badge.fury.io/js/react-outbrain-widget.svg)](https://badge.fury.io/js/react-outbrain-widget)

## Demo

[**Live Demo**](https://codesandbox.io/s/outbrain-react-widget-example-yet94)

## Installation & Usage

**Note:** _react-outbrain-widget assumes outbrain.js was loaded before react's first rendering. Please make sure outbrain.js is loaded via a script tag on the app's index.html_

```sh
npm install react-outbrain-widget --save
```

### Include the Component

```js
import React from 'react';
import { OutbrainWidget } from 'react-outbrain-widget';

class Component extends React.Component {
  render() {
    return (
      <OutbrainWidget dataSrc="mySite.com" dataWidgetId="AR_1" obUserId="GOOGLE_APPLE_ADVERTISING_ID" obAppVer="X.Y" />
    );
  }
}
```

## Props

| Name                   |   Type |
| ---------------------- | -----: |
| **dataSrc**            | string |
| **dataWidgetId**       | string |
| **obUserId**           | string |
| **obTemplate**         | string |
| **obInstallationKey**  | string |
| **obInstallationType** | string |
| **obAppVer**           | string |
| **isSecured**          | string |
