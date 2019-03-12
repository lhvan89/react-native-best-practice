import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import colors from '../../res/colors'
import Header from './Header'

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
      <ScrollView style={{ backgroundColor: colors.paleGrey, flex: 1 }}>
        <Header
          hostName='Jane'
          hostType='Gold Host'
          balance='12345'
          demical='67'
          earnedSince='4 December 2016'
        />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
})
