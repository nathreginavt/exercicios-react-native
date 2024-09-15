import {View, Text} from 'react-native';

import styles from './styles'

function Projetos(){
  return (
    <View>
    <Text style={[styles.alinhaTexto, styles.titulo]}>Projetos</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Gerenciador de Tarefas, Streaming, site de Petshop, API de viagens </Text>
  </View>
  )
}

export default Projetos