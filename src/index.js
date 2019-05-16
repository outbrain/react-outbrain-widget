import React, { Component } from "react";

class OutbrainWidget extends Component {
  componentDidUpdate() {
    OBR.extern.renderSpaWidgets(this.props.permalink);
  }

  componentDidMount() {
    OBR.extern.renderSpaWidgets(this.props.permalink);
  }

  render() {
    const { dataSrc, dataWidgetId, obTemplate } = this.props;
    return (
      <div
        className="OUTBRAIN"
        data-src={permalink}
        data-widget-id={widgetId}
        data-ob-template={templateName}
        data-ob-installation-key={obInstallationKey}
        data-ob-installation-type={obInstallationType}
        data-ob-app-ver={obAppVer}
        data-is-secured={isSecured}
      />
    );
  }
}

export { OutbrainWidget };