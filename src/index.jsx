import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v));
}

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
    obContentUrl = '',
    obPortalUrl = '',
    obBundleUrl = ''
  } = props;

  const attrs = removeEmpty({
    'data-src': dataSrc,
    'data-widget-id': dataWidgetId,
    'data-ob-user-id': obUserId,
    'data-ob-template': obTemplate,
    'data-ob-installation-key': obInstallationKey,
    'data-ob-installation-type': obInstallationType,
    'data-ob-app-ver': obAppVer,
    'data-is-secured': isSecured,
    'data-ob-contenturl': obContentUrl,
    'data-ob-portalurl': obPortalUrl,
    'data-ob-bundleurl': obBundleUrl
  });

  useEffect(() => {
    const { OBR } = window;
    if (OBR && OBR.extern && typeof OBR.extern.renderSpaWidgets === 'function') {
      OBR.extern.renderSpaWidgets(dataSrc);
    }
  }, [dataSrc]);

  return (
    <div className="OB-REACT-WRAPPER">
      <div
        className="OUTBRAIN"
        {...attrs}
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
  obContentUrl: PropTypes.string,
  obPortalUrl: PropTypes.string,
  obBundleUrl: PropTypes.string
};

OutbrainWidget.defaultProps = {
  obUserId: 'null',
  obTemplate: '',
  obInstallationKey: '',
  obInstallationType: '',
  obAppVer: '',
  isSecured: '',
  obContentUrl: '',
  obPortalUrl: '',
  obBundleUrl: ''
};

export { OutbrainWidget };
