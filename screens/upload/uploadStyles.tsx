import { StyleSheet } from 'react-native';

const uploadStyles = StyleSheet.create({
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
  btn_upload: {
    height: 46,
    marginTop: 14,
    width: 260,
    borderRadius: 4,
    backgroundColor: '#35b471',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    color: 'white',
  },
    container_bytes: {
    marginTop: 100,
    textAlign: 'center',
    gap: 6,
  },
    bytes_percent: {
    fontSize: 32,
    color: 'grey',
  },
    bytes_text: {
    color: 'grey',

  },
});

export default uploadStyles;