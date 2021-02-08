import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const OutbrainWidget = (props) => {
  const {
    dataSrc = '',
    dataWidgetId = '',
    obUserId = '',
    obTemplate = '',
    obInstallationKey = '',
    obInstallationType = '',
    obAppVer = '',
    isSecured = '',
  } = props;

  useEffect(() => {
    const { OBR } = window;
    if (OBR && OBR.extern && typeof OBR.extern.renderSpaWidgets === 'function') {
      OBR.extern.renderSpaWidgets(dataSrc);
    }
  }, [dataSrc]);

  return (
    <div className="REACT-OUTBRAIN-WRAPPER">
      <div
        className="OUTBRAIN"
        data-src={dataSrc}
        data-widget-id={dataWidgetId}
        data-ob-user-id={obUserId}
        data-ob-template={obTemplate}
        data-ob-installation-key={obInstallationKey}
        data-ob-installation-type={obInstallationType}
        data-ob-app-ver={obAppVer}
        data-is-secured={isSecured}
      />
    </div>
  );
};

OutbrainWidget.propTypes = {
  dataSrc: PropTypes.string.isRequired,
  dataWidgetId: PropTypes.string.isRequired,
  obUserId: PropTypes.string,
  obTemplate: PropTypes.string,
  obInstallationKey: PropTypes.string,
  obInstallationType: PropTypes.string,
  obAppVer: PropTypes.string,
  isSecured: PropTypes.string,
};

OutbrainWidget.defaultProps = {
  obUserId: 'null',
  obTemplate: '',
  obInstallationKey: '',
  obInstallationType: '',
  obAppVer: '',
  isSecured: '',
};

export { OutbrainWidget };
