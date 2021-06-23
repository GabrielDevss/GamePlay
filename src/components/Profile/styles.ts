import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: themes.fonts.title500,
    fontSize: 24,
    color: themes.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: themes.fonts.title700,
    fontSize: 24,
    color: themes.colors.heading,
  },
  message: {
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    color: themes.colors.heading,
  }
})