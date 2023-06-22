import { StyleSheet } from 'react-native';

const productsStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputs: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22,
  },
  inputText: {
    height: 46,
    width: 200,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#eaebed',
    color: '#B5B5B5',
  },
  inputNumber: {
    height: 46,
    width: 46,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#eaebed',
    color: '#B5B5B5',
    textAlign: 'center'
  },
  inputAdd: {
    height: 46,
    width: 46,
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#35b471',
    color: '#B5B5B5',
  },
  crud: {
    marginTop: 50,
    gap: 20,
  },
  crud_container: {
    height: 92,
    width: 312,
    backgroundColor: '#eaebed',
    justifyContent: 'center',
    padding: 16
  },
  crud_title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  crud_qtd: {
    fontSize: 10
  },
  crud_input: {
    
  },
  inputComplete: {
    height: 30,
    width: 30,
    backgroundColor: '#35b471'
  },
  inputDelete: {
    height: 30,
    width: 30,
    backgroundColor: 'red'

  },
});

export default productsStyles;