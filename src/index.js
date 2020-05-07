import React, { useEffect } from 'react';

const OutbrainWidget = (props) => {
  const { dataSrc = '', dataWidgetId = '', obTemplate = '', obInstallationKey = '', obInstallationType = '', obAppVer = '', isSecured = '' } = props;
  const { OBR = {} } = window;

  useEffect(() => {
    if (!OBR || !OBR.extern || !OBR.extern.hasOwnProperty('renderSpaWidgets')) {
      console.log('Missing params');
      return;
    }
    OBR.extern.renderSpaWidgets(dataSrc);
  });

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
};

export { OutbrainWidget };
