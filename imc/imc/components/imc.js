import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput,Image,TouchableOpacity,} from 'react-native';
import { estilo } from '../assets/css/estilo';

function Imc() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularIMC() {
    if (altura && peso) {
      var alturaMetros = parseFloat(altura) / 100;
      var imc = parseFloat(peso) / (alturaMetros * alturaMetros);
      setResultado(imc.toFixed(2));
    } else {
      setResultado();
    }
  }

  function Resultado() {
    if (resultado) {
      if (resultado < 18.5) {
        return 'Abaixo do peso';
      } else if (resultado >= 18.5 && resultado < 24.9) {
        return 'Peso normal';
      } else if (resultado >= 25 && resultado < 29.9) {
        return 'Sobrepeso';
      } else if (resultado >= 30 && resultado < 34.9) {
        return 'Obesidade grau I';
      } else if (resultado >= 35 && resultado < 39.9) {
        return 'Obesidade grau II';
      } else {
        return 'Obesidade grau III';
      }
    }
    return '';
  }

  return (
    <SafeAreaView style={estilo.container}>
    <Image
        source={require('../assets/calculadora.png')}
      />  
      <View style={estilo.div}>
        <Text style={estilo.titulo}>Altura:</Text>
        <TextInput
          style={estilo.texto}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <Text style={estilo.titulo}>Peso:</Text>
        <TextInput
          style={estilo.texto}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <TouchableOpacity style={estilo.botao} onPress={calcularIMC}>
          <Text style = {estilo.TextoBotao}>Calcular</Text>
        </TouchableOpacity>

        <Text style = {estilo.textoResultado}>Resultado: {resultado}</Text>
        <Text style = {estilo.textoResultado} >{Resultado()}</Text>
        <Image> </Image>
      </View>
    </SafeAreaView>
  );
}

export default Imc;
