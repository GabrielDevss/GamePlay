import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 27,
  },
  title: {
    fontFamily: themes.fonts.title700,
    color: themes.colors.heading,
    fontSize: 18
  },
  subtitle: {
    fontFamily: themes.fonts.text400,
    color: themes.colors.heading,
    fontSize: 13
  }
});