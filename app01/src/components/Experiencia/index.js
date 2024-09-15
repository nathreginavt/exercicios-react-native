import {View, Text} from 'react-native';

import styles from './styles'

function Experiencia(){
  return (
    <View>
    <Text style={[styles.alinhaTexto, styles.titulo]}>Experiência</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Estagiário de Engenharia de TI - Itaú Unibanco - 2024;</Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Estagiário Programa de Bolsas 'Backend SpringBoot' - Compass UOL - 2024; </Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Agente de Organização Escolar - Diretoria de Ensino - 2023; </Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Monitora de Estrutura de Dados - Fatec Baixada Santista - 2023; </Text>
    <Text style={[styles.alinhaTexto, styles.texto]}>Rescenseador - IBGE - 2022. </Text>
  </View>
  )
}

export default Experiencia