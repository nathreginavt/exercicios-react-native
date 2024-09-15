import {View, Image} from 'react-native';
import styles from './styles'

function ImagemPerfil(){
  let img = 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png';

  return(
    <View>
      <Image
        source={{ uri: img }}
        style={[styles.tamanhoImagem, styles.alinhaImagem]}
      />
    </View>
  )
}

export default ImagemPerfil