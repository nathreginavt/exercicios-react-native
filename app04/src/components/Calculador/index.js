import{View, Text, Pressable, TextInput, Image} from 'react-native';
import{useState} from 'react';

import {styles} from './style'

function Calculador(){
  const [cont, setCont] = useState('') 
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')

  function verifica(){
    if (alcool === '' || gasolina === '' || alcool <= 0 || gasolina <= 0){
      alert('Digite valores válidos!')
      return;
    }
    resp = (alcool / gasolina)
    if(resp > 0.7){
      setCont('A gasolina é mais vantajosa!')
    }
    else{
      setCont('O álcool é mais vantajoso!')
    }
    
  }
  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Álcool ou Gasolina?</Text>

        <Image source={{ uri: 'https://www.brasilpostos.com.br/wp-content/uploads/2020/04/etanol-ou-gasolina-14-2-1024x512-1.jpg' }} style={styles.image} />
        
        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool"
          onChangeText={setAlcool}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da Gasolina"
          onChangeText={setGasolina}
        />

        <Pressable style={styles.button} onPress={() => verifica()}>
          <Text style={styles.buttonText}>Verificar</Text>
        </Pressable>

        <Text style={styles.titulo}> {cont} </Text>
      </View>
  )
}

export default Calculador