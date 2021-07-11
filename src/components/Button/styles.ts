import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,

    backgroundColor: themes.colors.primary,
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: themes.colors.heading,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: themes.fonts.title700
  },
});