import React, { Component } from "react";

class OutbrainWidget extends Component {
  componentDidUpdate() {
    OBR.extern.renderSpaWidgets(this.props.dataSrc);
  }

  componentDidMount() {
    OBR.extern.renderSpaWidgets(this.props.dataSrc);
  }

  render() {
    const { dataSrc, dataWidgetId, obTemplate, obInstallationKey, obInstallationType, obAppVer, isSecured } = this.props;
    return (
      <div
        className="OUTBRAIN"
        data-src={dataSrc}
        data-widget-id={dataWidgetId}
        data-ob-template={obTemplate}
        data-ob-installation-key={obInstallationKey}
        data-ob-installation-type={obInstallationType}
        data-ob-app-ver={obAppVer}
        data-is-secured={isSecured}
      />
    );
  }
}

export { OutbrainWidget };