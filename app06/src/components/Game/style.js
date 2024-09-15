import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        marginTop: 30
    },
    titulo:{
      fontSize: 25,
      color: 'blue',
      textAlign: 'center',
      margin: 10,
      paddingTop: 20
    },
    image: { 
      width: 150, 
      height: 150, 
      alignSelf: 'center',
      marginBottom: 30
      },
    texto:{
      textAlign: 'center',
      fontSize: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
    input:{
      borderWidth: 1,
      marginHorizontal: 40,
      marginVertical: 10,
      padding: 10,
  }
});

export {styles}