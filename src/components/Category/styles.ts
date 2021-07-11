import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 8, 
  },
  content: {
    width: 100,
    height: 116,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginVertical: 20
  },
  title: {
    fontFamily: themes.fonts.title700,
    fontSize: 15,
    color: themes.colors.heading,
    marginTop: 19,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: themes.colors.secondary100,

    borderColor: themes.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: themes.colors.primary,
  }
})