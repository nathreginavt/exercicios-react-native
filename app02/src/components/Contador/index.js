import{View, Text, Pressable} from 'react-native';
import{useState} from 'react';

import {styles} from './style'

function Contador(){
  const [cont, setCont] = useState(0) 

  function incrementar(){
    setCont(cont + 1)
  }

  function decrementar(){
    if (cont > 0){
      setCont(cont - 1)
    }
  }

  function zerar(){
    setCont(0)
  }

  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Contador de Pessoas </Text>

        <Text style={styles.contador}>{cont}</Text>

        <Pressable style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
         <Pressable style={styles.button} onPress={decrementar}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={zerar}>
          <Text style={styles.buttonText}>ZERAR</Text>
        </Pressable>
      </View>
  )
}

export default Contador