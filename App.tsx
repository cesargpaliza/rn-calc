import React from 'react'
import { StatusBar, Text, View } from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme'

const App = () => {
  return (
    <View style={styles.fondo}> 
      <StatusBar
        backgroundColor='#303030'
        barStyle='light-content' //para ios
      />
      <CalculadoraScreen/>
    </View>
  )
}

export default App
