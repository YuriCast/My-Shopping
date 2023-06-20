import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f7f7f7',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 150,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'normal',
    color: '#8481b4',
  },
  subtitulo: {
    color: '#8481b4',
    fontSize: 13,
  },
  mid: {
    alignItems: 'center',
    marginTop: 80,
    gap: 16,
  },
  descricao: {
    color: '#44434a',
  },
  input: {
    height: 46,
    width: 300,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eaebed',
    color: '#B5B5B5',
  },
  entrar: {
    height: 46,
    marginTop: 14,
    width: 300,
    borderRadius: 4,
    backgroundColor: '#35b471',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrar_text: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#f7f7f8',
  },
  criar_recuperar: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default loginStyles;