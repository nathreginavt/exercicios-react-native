import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        marginTop: 40
    },
    titulo:{
      fontSize: 30,
      color: 'darkBlue',
      textAlign: 'center',
      margin: 40
    },
    image: { 
      width: 300, 
      height: 210, 
      alignSelf: 'center',
      marginBottom: 30
      },
    button: {
      backgroundColor: 'black',
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