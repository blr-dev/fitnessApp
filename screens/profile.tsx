import {View, ScrollView, Text, Image} from 'react-native';
import styles from '.././styles';

export default function RenderScreen() {
    return (
        <View style={styles.screenContainer}>
          <ScrollView  style={styles.mainContainer} showsVerticalScrollIndicator={false} >
            <Text style={styles.textHeader}>Treningi</Text>
            <Text style={styles.textNormal}>Wybierz trening</Text>
            <View style={styles.roundedSquare}>
                <Image source={require('.././assets/leon-ardo.jpg')} style={styles.roundedSquareImage}/>
            </View>
          </ScrollView>
        </View>
      )
}

/*
const stylesAdditional = StyleSheet.create({
    container: {
        marginTop: 40,
        marginLeft: 20,
    }
})
*/

