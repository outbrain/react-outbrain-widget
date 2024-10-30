import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

const removeNullOrEmpty = (obj) => Object.keys(obj).reduce((acc, key) => {
  if (obj[key] !== null && obj[key] !== '') {
    acc[key] = obj[key];
  }
  return acc;
}, {});

const WidgetContainer = ({ attrs }) => <div className="OUTBRAIN" {...attrs} />;

const OutbrainWidget = React.memo(({
  dataSrc,
  dataWidgetId,
  obUserId = '',
  obInstallationKey = '',
  obInstallationType = '',
  obAppVer = '',
  isSecured = '',
  obContentUrl = null,
  obPortalUrl = null,
  obBundleUrl = null,
  obLanguage = null,
  obPsub = null,
  obAppId = null,
  externalId = null,
  obDarkMode = null,
}) => {
  const widgetWrapperEl = useRef(null);

  const attrs = removeNullOrEmpty({
    'data-src': dataSrc,
    'data-widget-id': dataWidgetId,
    'data-ob-user-id': obUserId,
    'data-ob-installation-key': obInstallationKey,
    'data-ob-installation-type': obInstallationType,
    'data-ob-app-ver': obAppVer,
    'data-is-secured': isSecured,
    'data-ob-contenturl': obContentUrl,
    'data-ob-portalurl': obPortalUrl,
    'data-ob-bundleurl': obBundleUrl,
    'data-ob-language': obLanguage,
    'data-ob-psub': obPsub,
    'data-ob-app-id': obAppId,
    'data-external-id': externalId,
    'data-dark-mode': obDarkMode,
  });

  const permalink = dataSrc || obContentUrl || obPortalUrl || obBundleUrl;

  const isContainerMarked = () => {
    const el = widgetWrapperEl.current;
    const widgetContainer = el.querySelector('.OUTBRAIN');

    if (widgetContainer) {
      return !!widgetContainer.getAttribute('data-ob-mark');
    }

    return false;
  };

  const callRenderSpaWidgets = (url) => {
    const { OBR } = window;
    if (OBR && OBR.extern && typeof OBR.extern.renderSpaWidgets === 'function') {
      OBR.extern.renderSpaWidgets(url);
    }
  };

  useEffect(() => {
    if (isContainerMarked()) return; // stop if container was already found
    callRenderSpaWidgets(permalink);
  }, [attrs]);

  return (
    <div ref={widgetWrapperEl} className="OB-REACT-WRAPPER">
      <WidgetContainer key={Date.now()} attrs={attrs} />
    </div>
  );
});

OutbrainWidget.propTypes = {
  dataSrc: PropTypes.string.isRequired,
  dataWidgetId: PropTypes.string.isRequired,
  obUserId: PropTypes.string,
  obInstallationKey: PropTypes.string,
  obInstallationType: PropTypes.string,
  obAppVer: PropTypes.string,
  isSecured: PropTypes.string,
  obContentUrl: PropTypes.string,
  obPortalUrl: PropTypes.string,
  obBundleUrl: PropTypes.string,
  obLanguage: PropTypes.string,
  obPsub: PropTypes.string,
  obAppId: PropTypes.string,
  externalId: PropTypes.string,
  obDarkMode: PropTypes.string,
};

export { OutbrainWidget };
