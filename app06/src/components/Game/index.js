import{View, Text, Pressable, TextInput, Image} from 'react-native';
import{useState} from 'react';

import {styles} from './style'

function Game(){
  const [resultado, setResultado] = useState('') 
  const [valorDigitado, setValorDigitado] = useState('')

  function jogo(){
    const valid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const numeroDigitado = parseInt(valorDigitado);

    if(valid.includes(numeroDigitado)){
      randomNumber = parseInt(Math.random() * 10)
      mensagem = "Número aleatório: " + randomNumber

      if(randomNumber === numeroDigitado){
        mensagem += "\nACERTOU!"
      }
      else{
        mensagem += "\nTente novamente..."
      }

      setResultado(mensagem)
      return
    }
    alert('Digite um valor válido de 0 a 10!')   
    
  }
  return (
      <View style={styles.area}> 
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>

        <Image source={{ uri: 'https://images.vexels.com/content/140057/preview/dices-toy-a15438.png' }} style={styles.image} />
        
        <Text style={styles.texto}> Pense em um número de 0 a 10:</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o número"
          onChangeText={setValorDigitado}
        />

        
        <Pressable style={styles.button} onPress={() => jogo()}>
          <Text style={styles.buttonText}>Jogar</Text>
        </Pressable>

        <Text style={styles.texto}> {resultado} </Text>
      </View>
  )
}

export default Game