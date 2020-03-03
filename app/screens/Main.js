import React from 'react'
import { Card, Divider } from 'react-native-elements'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
class Main extends React.Component {
  state = {

  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor('white', true)
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View>
          <Card>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>good afternoon, ayomide!</Text>
              <Icon name='settings' type='feather' />
            </View>
          </Card>
          <Card containerStyle={styles.balanceCardStyle}>
            <View style={styles.balanceInfoView}>
              <Text style={styles.balanceTextLabelStyle}>last detected balance</Text>
              <Text style={styles.balanceTextStyle}>&#8358;500</Text>
            </View>
          </Card>
          <Divider style={styles.dividerStyle} />
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryTextLabel}>Transaction Threshold</Text>
            <Card containerStyle={styles.cardContainer}>
              <View>
                <Text>Ping!</Text>
              </View>
            </Card>
          </View>
          <Divider style={styles.dividerStyle} />
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryTextLabel}>
              Recent transactions
        </Text>
            <Card containerStyle={{ borderRadius: 12, height: 120, backgroundColor: '#aefaff' }}>
              <View>
                <Text>Pick me!!</Text>
              </View>
            </Card>
            <Card containerStyle={{ borderRadius: 12, height: 120, backgroundColor: '#aefaff' }}>
              <View>
                <Text>Pick me!!</Text>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white'
  },
  balanceCardStyle: {
    marginTop: 50,
    borderRadius: 12,
    borderColor: 'white',
    backgroundColor: '#0464ff',
    height: 150
  },
  balanceInfoView: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  balanceTextLabelStyle: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'white'
  },
  balanceTextStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  dividerStyle: {
    backgroundColor: 'grey',
    height: 1.5,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 15
  },
  categoryTextContainer: {
    marginLeft: 6,
    marginTop: 10
  },
  categoryTextLabel: {
    textTransform: 'uppercase',
    fontStyle: 'normal',
    color: 'grey'
  },
  cardContainer: {
    borderRadius: 12,
    height: 120,
    marginBottom: 10,
    backgroundColor: 'grey'
  }
})

export default Main