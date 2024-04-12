import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, 
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    height: 500,
    backgroundColor: '#809ED6',
    borderRadius: 10,
    shadowColor: '#000',
  },
  texto: {
    fontSize: 20,
    marginTop: 10, 
    backgroundColor: 'white',
    borderRadius: 10,
    width: 238,
    height: 47,
    marginBottom: 10, 
    textAlign: 'center', 
  },
  div: {
    gap: 40,
  },
  titulo: {
    fontWeight: 'bold', 
    marginBottom: -40 
  },
  botao:{
    backgroundColor: '#83E5DA',
    width: 100,
    height: 40,
    justifyContent: 'center',
    marginLeft:65,
    borderRadius:20
  },
  TextoBotao:{
    marginLeft: 25
  },
  textoResultado: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold', 
    marginBottom: -40,
    fontSize: 20
  }
});
