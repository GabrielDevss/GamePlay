import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 92,
    backgroundColor: themes.colors.secondary40,
    borderRadius: 8,
    color: themes.colors.heading,
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: themes.colors.secondary50,
    paddingHorizontal: 16,
    paddingTop: 16,
    textAlignVertical: 'top',
  }
})