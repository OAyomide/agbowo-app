import React from 'react'
import { Card } from 'react-native-elements'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

class Main extends React.Component {
  state = {

  }

  componentDidMount() {
    StatusBar.setBackgroundColor('#1b1821')
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Card containerStyle={styles.balanceCardStyle}>
          <Text>Hello there!</Text>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    height: '100%',
    backgroundColor: '#1b1821'
  },
  balanceCardStyle: {
    borderRadius: 20,
    backgroundColor: '#4564c2'
  }
})

export default Main