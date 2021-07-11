import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontFamily: themes.fonts.title700,
    fontSize: 18,
    color: themes.colors.heading,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8
  },
  nameStatus: {
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    color: themes.colors.heading,
  }
})