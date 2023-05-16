import {View, ScrollView, Text, Image} from 'react-native';
import styles from '.././styles';

export default function RenderScreen() {
   return (
        <View style={styles.screenContainer}>
          <ScrollView  style={styles.mainContainer} showsVerticalScrollIndicator={false} >
            <Text style={styles.textHeader}>Mój plan fitnessowy</Text>
            <Text style={styles.textNormal}>Wszystkie plany zostały spersonalizowane dla Ciebie</Text>
            <View style={styles.roundedSquare}>
                <Image source={require('.././assets/karl-solano.jpg')} style={styles.roundedSquareImage}/>
            </View>
            <Text style={styles.textHeader}>Spalanie tłuszczu</Text>
            <Text style={styles.textNormal}>Te plany są w całości poświęcone spalaniu tłuszczu i kalorii</Text>
            <View style={styles.roundedSquare}>
            <Image source={require('.././assets/leon-ardo.jpg')} style={styles.roundedSquareImage}/>
            </View>

          </ScrollView>
        </View>
      )
}