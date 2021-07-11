import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  title: {
    fontFamily: themes.fonts.title700,
    color: themes.colors.heading,
    fontSize:18,
    marginBottom: 4,
  },
  type: {
    fontFamily: themes.fonts.text400,
    color: themes.colors.heading,
    fontSize: 13,
  }
});