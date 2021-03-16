import React from 'react';

import WebView from '../../../../../../components/WebView';

export default function AssociadosWebPage({navigation}) {
  const pagePath = navigation.getParam('pagePath');

  return <WebView uri={pagePath} />;
}
