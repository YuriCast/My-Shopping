import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './productsStyles';

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome do Produto"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputNumber}
          placeholder="0"
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.inputAdd}
        />
      </View>
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

export default ProductsScreen