import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class DashboardScreen extends Component {

  static navigationOptions = {
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: '#0aa673',
    },
    headerTitleStyle: {
      fontFamily: "Montserrat-Medium",
      fontSize: 18,
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
