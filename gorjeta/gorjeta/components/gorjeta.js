import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import { estilo } from '../assets/css/estilo';

function Gorjeta() {
  const [valorConta, setValorConta] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularGorjeta() {
    var valor = parseFloat(valorConta);
    var gorjeta = valor * 0.08;
    var total = valor + gorjeta;
    setResultado(total.toFixed(2)); 
  }

  return (
    <SafeAreaView style={estilo.container}>
    <Image
        source={require('../assets/garcom2.png')}
      /> 
      <View style={estilo.div}>
        <Text style={estilo.titulo}>Valor da Conta</Text>
        <TextInput
          style={estilo.texto}
          keyboardType="numeric"
          value={valorConta}
          onChangeText={setValorConta}
        />

        <TouchableOpacity style={estilo.botao} onPress={calcularGorjeta}>
          <Text style={estilo.TextoBotao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={estilo.textoResultado}>Resultado: {resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Gorjeta;
