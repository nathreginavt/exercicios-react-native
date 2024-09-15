import{View, Text, Pressable, TextInput} from 'react-native';
import{useState} from 'react';

import {styles} from './style'

function Multiplicador(){
  const [cont, setCont] = useState('') 
  const [x, setX] = useState('')
  const [y, setY] = useState('')

  function multiplica(){
    if (x === '' || y === ''){
      alert('Digite valores válidos!')
      return;
    }
    resp = (x * y)
    setCont('Resultado = ' + resp)
  }
  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Multiplicador de Números </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro valor"
          onChangeText={setX}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo valor"
          onChangeText={setY}
        />

        <Pressable style={styles.button} onPress={() => multiplica()}>
          <Text style={styles.buttonText}>Calcular</Text>
        </Pressable>

        <Text style={styles.titulo}> {cont} </Text>
      </View>
  )
}

export default Multiplicador