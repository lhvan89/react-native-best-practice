import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ProfileScreen extends Component {

  static navigationOptions = {
    title: 'Profile',
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
        <Text>ProfileScreen</Text>
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