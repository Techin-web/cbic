import React from 'react';

import WebView from '../../../../components/WebView';

export default function AgendaWebPage({navigation}) {
  const pagePath = navigation.getParam('pagePath');

  return <WebView uri={pagePath} />;
}
