# react-outbrain-widget

![](https://github.com/outbrain/react-outbrain-widget/blob/master/ob-react.svg)

Embed your outbrain widget inside a react app

[![npm version](https://badge.fury.io/js/react-outbrain-widget.svg)](https://badge.fury.io/js/react-outbrain-widget)

## Demo

[**Live Demo**](https://codesandbox.io/s/outbrain-react-widget-example-yet94)

## Installation

**Note:** _react-outbrain-widget assumes outbrain.js was loaded before react's first rendering. Please make sure outbrain.js is loaded via a script tag on the app's index.html_

```html
<head>
	<script type="text/javascript" async="async" src="https://widgets.outbrain.com/outbrain.js"></script>
</head>
```

With NPM
```sh
npm install react-outbrain-widget --save
```

## Usage
### Include the Component

```jsx
import React from 'react';
import { OutbrainWidget } from 'react-outbrain-widget';

class Component extends React.Component {
  render() {
    return (
      <OutbrainWidget dataSrc="mySite.com" dataWidgetId="AR_1" />
    );
  }
}
```

### Placement props (Choose one from 4 types)
Either of the following props is **required** to use the component. Use the correct props and value which were advised by your Sales Engineer to represent where the widget is served.

Props Name | Type | Integration type | Description | Example
-|-|-|-|-
`dataSrc` | String | Direct Web | The crawlable URL of the current page | "http://www.webx0.com/2010/07/some-posthype-thoughts-about-flipboard.html"
`obContentUrl` | String | Web Mediation | The crawlable URL of the placement | "http://www.webx0.com/2010/07/some-posthype-thoughts-about-flipboard.html"
`obBundleUrl` | String | App | The store URL of the App | "https://play.google.com/store/apps/details?id=com.outbrain.app"
`obPortalUrl` | String | Native Environment | A URL representing the context where the ad placement is presented to users. Does not need to be a reachable/crawlable URL. | "http://www.chatPortal.com"

### Other props
props Name | Type | Requirement | Description | Example
-|-|-|-|-
`dataWidgetId` | String | **Required** | The widget ID as provided by Outbrain. | "JS_1"
`obInstallationKey` | String | **Required for Web Mediation, App and Native Environment** | Installation/partner key as provided by Outbrain. | "ABC1234567890"
`obUserId` | String | **Required for App & Native Environment** | It is mandatory to pass the Google or Apple Advertising ID for Outbrain installations in mobile apps, according to [Google](https://support.google.com/googleplay/android-developer/answer/6048248) and [Apple](https://developer.apple.com/library/prerelease/ios/documentation/AdSupport/Reference/ASIdentifierManager_Ref/index.html) guidelines and developer agreements. See [this page](http://developer.outbrain.com/google-and-apple-advertising-id/) for Outbrain requirements. | "EA7583CD-A667-48BC-B806-42ECB2B48606"
`obLanguage` | String | **Required for App & Native Environment** | The 2-letter language code (ISO-639-1-alpha-2). Must be added if bundleUrl or portalUrl is sent. | "en"
`data-ob-app-id`| String |**Required for pre-installed App Environment**| The App's unique identifier iOS: Bundle ID, Android: [Application ID/Package Name](https://developer.android.com/studio/build/application-id) |"com.outbrain.app"
`data-app-ver`| String | Optional | A version number of the App | "1.0.0"
`obPsub` | String | *Only if instructed by SE, App & Native only* | String value for additional section-level reporting breakdowns. Allowed characters: alphanumeric and underscore '_'. Requires permission from your Sales Engineer or Partner Manager. | "minus1"
`externalId` | String | Optional | String value with maximum of 70 characters for use with the [Engage Variant Reporting API](https://engagereportsapiexternalid.docs.apiary.io/#reference/reports/external-id-report). A maximum of 10K IDs/hour are supported. Contact your Partner Manager for API access. | "id123"


## Rendering optimisation
### Modifications not recommended
The component itself handles rendering of widgets when required props are given properly. When it doesn't work as expected on your site, please do not try modifying the code of component itself, but contact your Sales Engineer or Partner manager with sample pages.

### The component must not be hidden or cached.
If the page history is cached in the DOM tree, please remove the component itself from the cache. Only the component placed in the visible contents should be rendered.
Toggle example:
```jsx
render() {
  return (
      {showOutbrainWidget ? <OutbrainWidget dataSrc="mySite.com" dataWidgetId="AR_1" /> : null}
  );
}
```

### Server Side Rendering
The component should work with SSR.
If it's used in the combination of SSR and CSR, it should either reuse the components (rehydration) or clear them (clear the Placement prop) and make sure to remove the component on hidden contents as mentioned in the previous section.
