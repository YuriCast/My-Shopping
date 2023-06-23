import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './invoiceStyles';

function InvoiceScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container_upload}>
        <Text style={styles.upload_text}>Clique para adicionar ou para trocar a foto</Text>
      </View>
      <Text style={styles.info_foto}>
        Informações da foto
      </Text>
      <View style={styles.crud}>
        <View style={styles.crud_container}>
          <Text style={styles.crud_title}>
            Café
          </Text>
          <Text style={styles.crud_qtd}>
           Quantidade: 3
          </Text>
          <View style={styles.crud_input}>
          <TouchableOpacity 
            style={styles.inputComplete}
          />
          <TouchableOpacity 
            style={styles.inputDelete}
          />
          </View>
        </View>
      </View>
    </View>
  );
}

export default InvoiceScreen