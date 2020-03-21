import React from 'react'
import { View, ToastAndroid, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { Card, Text, Button, Input } from 'react-native-elements'
import { Picker } from 'react-native'
import { StackActions, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { Svg, Path } from 'react-native-svg'


class Banks extends React.Component {

  state = {
    bank: '',
    showNextButton: false
  }

  componentDidMount() {
    StatusBar.setBackgroundColor('white')
    StatusBar.setBarStyle('dark-content')
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="468"
          height="253"
          fill="none"
          viewBox="0 0 468 253"
        >
          <Path
            fill="#372F4A"
            d="M459.601 111.839C31.204 326.518 8.671 271.596-5 111.839V-161h464.601s428.397 58.159 0 272.839z"
          ></Path>
        </Svg>
        <View>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />

          <Input placeholder="Account number" keyboardType='numeric' maxLength={10} />

          <Picker>
            <Picker.Item label="Select your bank" value="" />
            <Picker.Item label="GTBank" value="gtbank" />
          </Picker>
          <Button></Button>
        </View>
        {/* <Card
          title="Let us know you" // TODO: support other banks apart from gtbank.
          containerStyle={{ backgroundColor: "#5450bf", marginTop: 300, borderColor: 'transparent', borderRadius: 25 }}
          titleStyle={{ color: 'white' }}>
          <Text style={{ fontStyle: "normal" }}>What bank do you use?</Text>
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
        }} onPress={async () => {
          ToastAndroid.show("We want to go to next screen.", ToastAndroid.SHORT)
          await AsyncStorage.setItem('userBank', this.state.bank)
          // this.props.navigation.navigate('Main')
          this.props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{ name: 'Main' }]
          }))
        }} /> */}
        {/* <TouchableOpacity style={styles.nextButton} onPress={ToastAndroid.show("Next up, Main Dash!!", ToastAndroid.SHORT)}></TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'black' }}></Text> */}
      </View >
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1
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