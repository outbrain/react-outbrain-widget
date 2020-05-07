import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const OutbrainWidget = (props) => {
  const {
    dataSrc = '',
    dataWidgetId = '',
    obTemplate = '',
    obInstallationKey = '',
    obInstallationType = '',
    obAppVer = '',
    isSecured = '',
  } = props;
  const { OBR = {} } = window;

  useEffect(() => {
    if (OBR && OBR.extern && typeof OBR.extern.renderSpaWidgets === 'function') {
      OBR.extern.renderSpaWidgets(dataSrc);
    }
  }, [dataSrc]);

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

OutbrainWidget.propTypes = {
  dataSrc: PropTypes.string.isRequired,
  dataWidgetId: PropTypes.string.isRequired,
  obTemplate: PropTypes.string,
  obInstallationKey: PropTypes.string,
  obInstallationType: PropTypes.string,
  obAppVer: PropTypes.string,
  isSecured: PropTypes.string,
};

OutbrainWidget.defaultProps = {
  obTemplate: '',
  obInstallationKey: '',
  obInstallationType: '',
  obAppVer: '',
  isSecured: '',
};

export { OutbrainWidget };
