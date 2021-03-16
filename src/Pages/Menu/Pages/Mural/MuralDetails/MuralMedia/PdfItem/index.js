import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import PdfView from './PdfView';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function PdfItem(props) {
  const [pdfIsOpen, setPdfIsOpen] = useState(false);
  return (
    <View style={styles.PdfItem}>
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        statusBarTranslucent={true}
        visible={pdfIsOpen}
        onRequestClose={() => setPdfIsOpen(false)}>
        <TouchableOpacity
          style={styles.closeModalIcon}
          onPress={() => setPdfIsOpen(false)}>
          <View>
            <Icon name="long-arrow-left" size={22} />
          </View>
        </TouchableOpacity>
        <PdfView pdfUri={props.baseURL + props.filename} />
      </Modal>
      <Icon name="file-pdf-o" size={42} style={styles.PdfIcon} />
      <Text>Pdf - {props.fileoriginalname}</Text>
      <TouchableOpacity
        style={styles.ViewPdfIcon}
        onPress={() => setPdfIsOpen(true)}>
        <Text style={styles.OpenPdfText}>Abrir PDF</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  PdfItem: {
    height: 270,
    width: '100%',
    backgroundColor: '#FFF',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PdfIcon: {
    color: 'red',
  },
  ViewPdfIcon: {
    zIndex: 100,
    padding: 10,
  },
  OpenPdfText: {
    color: '#0D42A1',
  },
  closeModalIcon: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    zIndex: 1000,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 3,
  },
});
