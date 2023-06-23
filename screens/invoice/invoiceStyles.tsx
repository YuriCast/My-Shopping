import { StyleSheet } from 'react-native';

const invoiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container_upload: {
    width: 260,
    height: 260,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#eaebed',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 16,
    marginTop: 40,
  },
  upload_text: {
    color: 'grey'
  },
  info_foto: {
    color: 'grey',
    marginTop: 10,
    fontSize: 10,
  },
  crud: {
    marginTop: 24,
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

  },});

export default invoiceStyles;