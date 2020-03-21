/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Onboarding from './app/screens/onboarding/Onboarding';
import UserDetails from './app/screens/onboarding/UserOnboardingDetails';
import Main from './app/screens/Main';
import AsyncStorage from '@react-native-community/async-storage';


type Props = {
  info?: string
}

const Stack = createStackNavigator()
class App extends Component<Props> {
  // $FlowFixMe
  state = {
    name: '',
    isNewUser: true
  }
  async componentDidMount() {
    await AsyncStorage.removeItem('isNewUser')
    let isNewUser = await AsyncStorage.getItem('isNewUser')
    console.log(`Is new user: `, JSON.parse(isNewUser))
    if (JSON.parse(isNewUser) === false) {
      // $FlowFixMe
      this.setState({ isNewUser: JSON.parse(isNewUser) })
    }
    // console.log(`Should hide Splashscreen here...`)
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/**$FlowFixMe */}
          {this.state.isNewUser ? <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} /> : <Stack.Screen name="MMain" component={Main} options={{ headerShown: false }} />}
          <Stack.Screen name="UserDetails" component={UserDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      // <Onboarding />
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
