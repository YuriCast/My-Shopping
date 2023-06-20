import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './loginStyles';

const loginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>MyShopping</Text>
          <Text style={styles.subtitulo}>Monte aqui a sua lista</Text>
        </View>

        <View style={styles.mid}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.entrar}>
            <Text style={styles.entrar_text}>Entrar</Text>
          </TouchableOpacity>
          
          <View style={styles.criar_recuperar}>
          <Text>Recuperar Senha</Text>
          <Text>Criar Minha Conta</Text>
          </View>

        </View>
      </View>
  );
};

export default loginScreen;