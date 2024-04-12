import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 400, 
    marginLeft: 200,
    marginRight: 200,
    marginTop: 100,
    height: 500,
    backgroundColor: '#80C7D6',
    borderRadius: 10,
    shadowColor: '#000',
  },
  texto: {
    fontSize: 20,
    marginTop: 0, 
    backgroundColor: 'white',
    borderRadius: 10,
    width: 200,
    height: 47,
    marginBottom: 40, 
    textAlign: 'center', 
  },
  div: {
    gap: 40,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontWeight: 'bold', 
    marginBottom: -15,
    marginLeft: -100
  },
  botao:{
    backgroundColor: '#83E5DA',
    width: 100,
    height: 40,
    justifyContent: 'center',
    marginLeft:60,
    borderRadius:20,
    marginTop: 30
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
  },
  botaoAd:{
    backgroundColor: '#151DDD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    marginLeft: -150,
},
botaoSub:{
    backgroundColor: '#151DDD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    marginLeft: -150,
    
},
botaoMult:{
    backgroundColor: '#151DDD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    marginLeft: 130,
    marginTop: -160, 

    
},
botaoDiv:{
    backgroundColor: '#151DDD',
    width: 100,
    height: 40,
    justifyContent: 'center',
    marginLeft: 130,
    marginTop: 1, 

    
}

  
});
