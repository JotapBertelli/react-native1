import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { estilo } from '../assets/css/estilo';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [eventos, setEventos] = useState([]);

  function ExibirInformacoes() {
    if (nome && idade && cpf && senha) {
      const NovoEvento = {
        id: eventos.length + 1,
        nome: nome,
        idade: idade,
        cpf: cpf,
        senha: senha,
      };
      setEventos([...eventos, NovoEvento]);
      setNome('');
      setIdade('');
      setCPF('');
      setSenha('');
    } else {
      alert('Por favor, preencha todos os campos do evento.');
    }
  }

  return (
    <SafeAreaView style={estilo.container}>
      <Image
        source={require('../assets/pagina-de-login1.png')}
      /> 
      <View style={estilo.inputContainer}>
        <TextInput
          style={estilo.texto}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={estilo.texto}
          placeholder="Idade"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
        <TextInput
          style={estilo.texto}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCPF}
          keyboardType="numeric"
        />
        <TextInput
          style={estilo.texto}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={estilo.botao}
          onPress={ExibirInformacoes}
        >
          <Text style={estilo.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilo.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Senha: {item.senha}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Cadastro;

