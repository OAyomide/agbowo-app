import React from 'react'
import { View, ToastAndroid, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'
import { Picker } from 'react-native'
class Banks extends React.Component {

  state = {
    bank: '',
    showNextButton: false
  }

  componentDidMount() {
    StatusBar.setBackgroundColor('#1b1821')
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Card
          title="Select your bank" // TODO: support other banks apart from gtbank.
          containerStyle={{ backgroundColor: "#5450bf", marginTop: 300, borderColor: 'transparent', borderRadius: 25 }}
          titleStyle={{ color: 'white' }}>

          <Picker
            selectedValue={this.state.bank}
            style={{ height: 50, width: 300, color: 'white' }}
            onValueChange={(itemValue, itemIndex) => {
              console.log(`ItemValue is ${itemValue} and itemIndex is ${itemIndex}`)
              if (itemValue === "") {
                this.setState({ showNextButton: false, bank: '' })
                ToastAndroid.showWithGravity("Please select your bank", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
              } else {
                this.setState({ bank: itemValue, showNextButton: true })
              }
            }}
          >
            <Picker.Item label="None" value="" />
            <Picker.Item label="Guarantee Trust Bank" value="gtbank" />
          </Picker>
        </Card>

        <Button title="Go on" disabled={!this.state.showNextButton} type="solid" activeOpacity={this.state.showNextButton ? 0.5 : 1} buttonStyle={{
          alignContent: "center",
          borderRadius: 15,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: '#5450bf',
          height: 45
        }} containerStyle={{
          paddingLeft: 15,
          paddingRight: 15,
          marginTop: 10
        }} onPress={() => {
          ToastAndroid.show("We want to go to next screen.", ToastAndroid.SHORT)
          this.props.navigation.navigate("Main")
        }} />
        {/* <TouchableOpacity style={styles.nextButton} onPress={ToastAndroid.show("Next up, Main Dash!!", ToastAndroid.SHORT)}></TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'black' }}></Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#1b1821',
    height: '100%'
  },
  pickerStyle: {
    width: 100
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 30,
    position: 'absolute',
    bottom: '1%',
    right: 0,
    left: 0
  }
})


export default Banks