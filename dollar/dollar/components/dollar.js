import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { estilo } from '../assets/css/estilo';

function ConversaoDollar() {
  const [valorConta, setValorConta] = useState('');
  const [resultado, setResultado] = useState('');

  function CalcularConversao() {
    var valor = parseFloat(valorConta);
    var taxaDolar = 5.0;
    var valorDolar = valor / taxaDolar;
    setResultado(valorDolar.toFixed(2));
  }

  return (
    <SafeAreaView style={estilo.container}>
    <Image
        source={require('../assets/pagamento-em-dinheiro 1.png')}
      />  
      <View style={estilo.div}>
        <Text style={estilo.titulo}>Valor em reais:</Text>
        <TextInput
          style={estilo.texto}
          keyboardType="numeric"
          value={valorConta}
          onChangeText={setValorConta}
        />

        <TouchableOpacity style={estilo.botao} onPress={CalcularConversao}>
          <Text style={estilo.TextoBotao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={estilo.textoResultado}>Resultado em dólar: ${resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

export default ConversaoDollar;
