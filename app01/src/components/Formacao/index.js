import {View, Text} from 'react-native';

import styles from './styles'

function Formacao(){
  return (
    <View>
    <Text style={[styles.alinhaTexto, styles.titulo]}>Formação</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Técnico em Informática - IFSP Campus Cubatão; </Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Tecnólogo em Sistemas para Internet - Fatec Baixada Santista. </Text>
  </View>
  )
}

export default Formacao