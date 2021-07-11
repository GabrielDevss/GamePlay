import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: themes.colors.secondary40,
    borderRadius: 8,
    color: themes.colors.heading,
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: themes.colors.secondary50,
  }
})