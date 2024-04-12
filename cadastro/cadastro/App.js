import { SafeAreaView, View, } from 'react-native';
import Imc from './components/registro'; 
import { estilo } from './assets/css/estilo';

function App() {
  return (
    <SafeAreaView style={estilo.container}>
      <View style={estilo.div}>
        <Imc/> 
      </View>
    </SafeAreaView>
  );
}

export default App;
