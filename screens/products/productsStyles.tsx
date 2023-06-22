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
});

export default productsStyles;