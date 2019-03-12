import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import colors from '../../res/colors'
import fonts from '../../res/fonts'

export default class Header extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.lightGrey, padding: 16 }}>
        <View style={{ borderRadius: 69 / 2, overflow: 'hidden' }}>
          <Image
            style={{ width: 69, height: 69, }}
            source={{ uri: 'https://images.unsplash.com/photo-1509070016581-915335454d19?ixlib=rb-1.2.1&w=1000&q=80' }}
          />
        </View>
        <View style={{ justifyContent: 'center', marginLeft: 13 }}>
          <Text style={fonts.text1}>{this.props.hostName}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 3 }}>
            <Image style={{ width: 13, height: 14 }} source={require('../../assets/images/icons/medal.png')} />
            <Text style={[fonts.text2, { paddingLeft: 3 }]}>{this.props.hostType}</Text>
          </View>

        </View>
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={fonts.text3}>$</Text>
            <Text style={[fonts.text4, { position: 'relative', top: -5 }]}>{this.props.balance}</Text>
            <Text style={fonts.text5}>.{this.props.demical}</Text>
          </View>
          <Text style={[fonts.text6, { textAlign: 'right' }]}>Earned Since{'\n'}{this.props.earnedSince}</Text>
        </View>
      </View >
    )
  }
}
