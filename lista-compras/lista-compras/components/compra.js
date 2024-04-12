import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList,Image } from 'react-native';
import { estilo } from '../assets/css/estilo';

function ListaCompra() {
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [item3, setItem3] = useState('');
  const [listaCompras, setListaCompras] = useState([]);

  function AdicionarItem() {
    if (item1 && item2 && item3) {
      const novoItem = {
        id: listaCompras.length + 1,
        item1: item1,
        item2: item2,
        item3: item3,
      };
      setListaCompras([...listaCompras, novoItem]);
      setItem1('');
      setItem2('');
      setItem3('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  return (
    <SafeAreaView style={estilo.container}>
    <Image
        source={require('../assets/merchandising-de-mercearia 1.png')}
      />  
      <View style={estilo.inputContainer}>
        <TextInput
          style={estilo.texto}
          placeholder="Item 1"
          value={item1}
          onChangeText={setItem1}
        />
        <TextInput
          style={estilo.texto}
          placeholder="Item 2"
          value={item2}
          onChangeText={setItem2}
        />
        <TextInput
          style={estilo.texto}
          placeholder="Item 3"
          value={item3}
          onChangeText={setItem3}
        />
        <TouchableOpacity
          style={estilo.botao}
          onPress={AdicionarItem}
        >
          <Text style={estilo.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listaCompras}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilo.item}>
            <Text>Item 1: {item.item1}</Text>
            <Text>Item 2: {item.item2}</Text>
            <Text>Item 3: {item.item3}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default ListaCompra;
