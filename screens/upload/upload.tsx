import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './uploadStyles';

function uploadScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_upload}>
        <Text style={styles.upload_text}>Clique para adicionar ou para trocar a foto</Text>
      </View>
      <TouchableOpacity style={styles.btn_upload}>
        <Text style={styles.btn_text}>
          Fazer Upload
        </Text>
      </TouchableOpacity>
      <View style={styles.container_bytes}>
        <Text style={styles.bytes_percent}>
          0%
        </Text>
        <Text style={styles.bytes_text}>
          0 de 100 bytes transferidos
        </Text>
      </View>
    </View>
  );
}

export default uploadScreen