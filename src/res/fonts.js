import { StyleSheet } from 'react-native'
import colors from './colors'
const fonts = StyleSheet.create({

  // Montserrat-Bold
  text4: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    color: colors.dark
  },
  text5: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.dark
  },

  // Montserrat-Medium
  text3: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.dark
  },

  // Raleway-Regular
  text1: {
    fontFamily: 'Raleway-Regular',
    fontSize: 21,
    color: colors.charcoalGrey
  },
  text2: {
    fontFamily: 'Raleway-Regular',
    fontSize: 11,
    color: colors.dark,
  },
  text6: {
    fontFamily: 'Raleway-Regular',
    color: colors.coolGreyTwo,
    fontSize: 10,
  }
})
export default fonts