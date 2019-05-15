import React, { Component } from "react";

class OutbrainWidget extends Component {
  componentDidUpdate() {
    OBR.extern.renderSpaWidgets(this.props.permalink);
  }

  componentDidMount() {
    OBR.extern.renderSpaWidgets(this.props.permalink);
  }

  render() {
    const { permalink, widgetId, templateName } = this.props;
    return (
      <div
        className="OUTBRAIN"
        data-src={permalink}
        data-widget-id={widgetId}
        data-ob-template={templateName}
      />
    );
  }
} 

export { OutbrainWidget };