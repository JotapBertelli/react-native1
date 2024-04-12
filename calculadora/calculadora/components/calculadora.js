import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { estilo } from '../assets/css/estilo';

function Numero() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');
  const [operacao, setOperacao] = useState('');

  function Operacao() {
    let result;
    switch (operacao) {
      case 'Adicao':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case 'Subtracao':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case 'Multiplicacao':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case 'Divisao':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = 'Operação inválida';
    }
    setResultado(result.toString());
  }

  function selecionarOperacao(op) {
    setOperacao(op);
  }

  return (
    <SafeAreaView>
    <Image
        source={require('../assets/calculadora1.png')}
      /> 
      <View style={estilo.container}>
          <Text style = {estilo.titulo}>Operações básicas:</Text>
        <TextInput
          style={estilo.texto}
          onChangeText={function(text) {
            setNum1(text);
          }}
          keyboardType="numeric"
          placeholder = 'Informe o número' 
        />

        <TextInput
          style={estilo.texto}
          onChangeText={function(text) {
            setNum2(text);
          }}
          value={num2}
          keyboardType="numeric"
          placeholder = 'Informe o número' 

        />
        <View style = {estilo.div}>
        <TouchableOpacity style={estilo.botaoAd} onPress={function() {
          selecionarOperacao('Adicao');
        }}>
          <Text style={estilo.TextoBotao}>Adição</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botaoSub} onPress={function() {
          selecionarOperacao('Subtracao');
        }}>
          <Text style={estilo.TextoBotao}>Subtração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botaoMult} onPress={function() {
          selecionarOperacao('Multiplicacao');
        }}>
          <Text style={estilo.TextoBotao}>Multiplicação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.botaoDiv} onPress={function() {
          selecionarOperacao('Divisao');
        }}>
          <Text style={estilo.TextoBotao}>Divisão</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={estilo.botao} onPress={Operacao}>
          <Text style={estilo.TextoBotao}>Calcular</Text>
        </TouchableOpacity>

        <Text style={estilo.textoResultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Numero;