import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  Modal,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import {WebView} from 'react-native-webview';
import {withNavigation} from 'react-navigation';

export default withNavigation(function WebViewComponent(props) {
  const [isWebViewLoading, setIsWebViewLoading] = useState(true);

  function goBackNavigation() {
    setIsWebViewLoading(false);
    props.navigation.goBack();
  }

  return (
    <Fragment>
      <Modal animationType="fade" transparent={true} visible={isWebViewLoading}>
        <View style={styles.ModalContent}>
          <TouchableOpacity
            style={styles.IconContainer}
            onPress={goBackNavigation}>
            <FeatherIcon name="chevron-left" size={22} color="#fff" />
            <Text style={styles.GoBackText}>Voltar</Text>
          </TouchableOpacity>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      </Modal>
      <WebView
        originWhitelist={['*']}
        source={{uri: props.uri}}
        onLoadEnd={() => setIsWebViewLoading(false)}
        style={styles.WebView}
      />
    </Fragment>
  );
});

const styles = StyleSheet.create({
  WebView: {
    flex: 1,
  },
  ModalContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActivityIndicatorContainer: {
    backgroundColor: '#fff',
  },
  IconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    top: '50%',
    left: 10,
  },
  GoBackText: {
    color: '#fff',
  },
});
