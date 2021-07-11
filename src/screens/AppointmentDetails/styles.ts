import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  banner: {
    width: '100%',
    height: 234, 
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 24
  },
  title: {
    fontFamily: themes.fonts.title700,
    fontSize: 28,
    color: themes.colors.heading,
  },
  subtitle: {
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    color: themes.colors.heading,
    lineHeight: 21,
  },
  members: {
    marginLeft: 24,
    marginTop: 27
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
})