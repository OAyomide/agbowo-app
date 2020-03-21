import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'

class AboutAgbowo extends React.Component {
  render() {
    return (
      <View style={styles.containery}>
        <Text>Hello there!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    height: "100%"
  }
})

export default AboutAgbowo