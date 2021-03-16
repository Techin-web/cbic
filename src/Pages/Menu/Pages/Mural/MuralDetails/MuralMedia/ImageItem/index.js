import React, {useState, useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {getToken} from '../../../../../../../services/auth';

export default function ImageItem(props) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    getCurrentToken();
  }, []);

  async function getCurrentToken() {
    const currentToken = await getToken();
    setToken(currentToken);
  }

  return (
    <Image
      resizeMode="contain"
      source={{
        uri: props.filename.search('http') !== -1 ? props.filename : props.baseURL + props.filename,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }}
      style={styles.ImageItem}
    />
  );
}

const styles = StyleSheet.create({
  ImageItem: {
    height: 270,
    width: '100%',
  },
});
