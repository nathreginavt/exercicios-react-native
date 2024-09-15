// Crie um App chamado Meu Perfil Profissional, onde ele exiba a sua foto, dados pessoais, formação, experiência e projetos que você já fez.


import {View, Text, Image} from 'react-native'

import ImagemPerfil from './src/components/ImagemPerfil/index'
import DadosPessoais from './src/components/DadosPessoais/index'
import Formacao from './src/components/Formacao/index'
import Experiencia from './src/components/Experiencia/index'
import Projetos from './src/components/Projetos/index'

function App(){

  return(
    <View>
      <ImagemPerfil />
      <DadosPessoais />
      <Formacao />
      <Experiencia />
      <Projetos />
    </View>
  )
}

export default App