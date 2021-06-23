import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: themes.colors.secondary40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  title: {
    fontFamily: themes.fonts.title500,
    fontSize: 15,
    color: themes.colors.heading,
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: themes.colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderColor: themes.colors.secondary50,
    borderWidth: 1,
    borderRadius: 3
  }
})