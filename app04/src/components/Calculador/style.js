import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        marginTop: 40
    },
    titulo:{
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        marginBottom: 40
    },
    image: { 
      width: 200, 
      height: 100, 
      alignSelf: 'center',
      marginVertical: 20
      },
    button: {
      backgroundColor: 'green',
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
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 10,
  }
});

export {styles}