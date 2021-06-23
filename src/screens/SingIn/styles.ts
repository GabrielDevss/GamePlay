import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -70,
    paddingHorizontal: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: themes.colors.heading,
    marginBottom: 16,
    fontFamily: themes.fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    textAlign: 'center',
    color: themes.colors.heading,
    marginBottom: 64,
    fontFamily: themes.fonts.title500,
    lineHeight: 25
  },
});