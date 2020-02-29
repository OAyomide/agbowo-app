// @flow
import React from 'react'
import { Card } from 'react-native-elements'
import { View, Image, StatusBar, ToastAndroid } from 'react-native'
import OnboardingSwiper from 'react-native-onboarding-swiper'
import Asyncstorage from '@react-native-community/async-storage'

type Props = {
  input?: string
}
class Onboarding extends React.Component<Props>{

  componentDidMount() {
    StatusBar.setBackgroundColor("#5874ad")
  }

  // navigateToHomeScreen = async () => {
  //   ToastAndroid.show("Click Clank..", ToastAndroid.SHORT)
  //   this.props.navigation.navigate('Banks')
  // }
  render() {
    return (
      <OnboardingSwiper
        pages={[
          { image: <Image source={require('../icons/question.png')} style={{ width: 150, height: 150 }} />, backgroundColor: '#5874ad', title: 'Why?', subtitle: 'Agbowo parses your SMS to know the status of your financial spending (at least to a large extent)' },
          { image: <Image source={require('../icons/thumbsup.png')} style={{ width: 150, height: 150 }} />, backgroundColor: '#5874ad', title: '', subtitle: 'Give SMS permission, layback and watch it "just work"' }
        ]}
        onDone={() => {
          ToastAndroid.show("Hello there", ToastAndroid.SHORT)
          Asyncstorage.setItem('isNewUser', JSON.stringify(false))
            // $FlowFixMe
            .then(() => this.props.navigation.navigate("Banks"))
            .catch(err => ToastAndroid.show("An Error occurred. Check logs", ToastAndroid.SHORT))
        }}
      />
    )
  }
}

export default Onboarding