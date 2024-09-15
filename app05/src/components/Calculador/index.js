import{View, Text, Pressable, TextInput, Image} from 'react-native';
import{useState} from 'react';

import {styles} from './style'

function Calculador(){
  const [classificacao, setClassificacao] = useState('') 
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function verifica(){
    if (peso === '' || altura === '' || peso <= 0 || altura <= 0){
      alert('Digite valores válidos!')
      return;
    }
    resp = (peso / (altura * altura))
    
    if(resp <= 18.5){
      setClassificacao('Abaixo do Peso')
      return
    }
    if(resp <= 24.9){
      setClassificacao('Peso Normal')
      return
    }
    if(resp <= 29.9){
      setClassificacao('Sobrepeso')
      return
    }
    if(resp <= 34.9){
      setClassificacao('Obesidade Grau I')
      return
    }
    if(resp <= 39.9){
      setClassificacao('Obesidade Grau II')
      return
    }
    if(resp >= 40){
      setClassificacao('Obesidade Grau III ou Mórbida')
      return
    }
    
  }
  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Cálculo do IMC</Text>

        <Image source={{ uri: 'https://files.passeidireto.com/7b85d74f-5ceb-4b88-9019-cf93e80ae751/7b85d74f-5ceb-4b88-9019-cf93e80ae751.png' }} style={styles.image} />
        
        <TextInput
          style={styles.input}
          placeholder="Peso (em kg)"
          onChangeText={setPeso}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura (em metros)"
          onChangeText={setAltura}
        />

        <Pressable style={styles.button} onPress={() => verifica()}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>

        <Text style={styles.titulo}> {classificacao} </Text>
      </View>
  )
}

export default Calculador