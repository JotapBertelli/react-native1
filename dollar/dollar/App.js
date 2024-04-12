import { SafeAreaView, View, } from 'react-native';
import Gorjeta from './components/dollar'; 
import { estilo } from './assets/css/estilo';

function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <View style={estilo.div}>
        <Gorjeta/> 
      </View>
    </SafeAreaView>
  );
}

export default App;
