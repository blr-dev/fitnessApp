import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screenContainer: {
      backgroundColor: '#005265',
    },
    appContainer: {
      flex: 1,
      backgroundColor: '#005265',
    },
    mainContainer: {
      margin: '5%',
    },
    textHeader: {
      color: 'white',
      fontSize: 25,
      fontWeight: '800',
      lineHeight: 40,
    },
    textNormal: {
      color: 'white',
    },
    roundedSquare: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 20,
      backgroundColor: '#003f4e',
      marginTop: '5%',
      marginBottom: '5%',
    },
    roundedSquareImage: {
        flex: 1, 
        aspectRatio: 1,
        borderRadius: 20,
    },
  });

export default styles;