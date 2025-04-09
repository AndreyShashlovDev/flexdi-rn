import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#0000ff' />
      <Text style={styles.text}>Загрузка...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
})

export default LoadingScreen
