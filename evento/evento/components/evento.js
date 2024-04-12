import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList,Image } from 'react-native';
import { estilo } from '../assets/css/estilo';

function Agenda() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [eventos, setEventos] = useState([]);

  function AdicionarEvento() {
    if (titulo && descricao && data && horario) {
      const NovoEvento = {
        id: eventos.length + 1,
        titulo: titulo,
        descricao: descricao,
        data: data,
        horario: horario,
      };
      setEventos([...eventos, NovoEvento]);
      setTitulo('');
      setDescricao('');
      setData('');
      setHorario('');
    } else {
      alert('Por favor, preencha todos os campos do evento.');
    }
  }

  return (
    <SafeAreaView>
      <View style={estilo.container}>
     <Image
        source={require('../assets/image1.png')}
      />  
        <Text style={estilo.titulo}>Agenda de Eventos</Text>
        <TextInput
          style={estilo.texto}
          placeholder="Título do Evento"
          value={titulo}
          onChangeText={(text) => setTitulo(text)}
        />
        <TextInput
          style={estilo.texto}
          placeholder="Descrição do Evento"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
        <TextInput
          style={estilo.texto}
          placeholder="Data do Evento"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <TextInput
          style={estilo.texto}
          placeholder="Horário do Evento"
          value={horario}
          onChangeText={(text) => setHorario(text)}
        />
        <TouchableOpacity style={estilo.botao} onPress={AdicionarEvento}>
          <Text style={estilo.TextoBotao}>Adicionar Evento</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Título: {item.titulo}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Horário: {item.horario}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Agenda;
