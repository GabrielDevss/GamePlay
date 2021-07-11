import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    flex: 1,
    backgroundColor: themes.colors.overlay,

  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: themes.colors.secondary30,
    alignSelf: 'center',
    marginTop: 13,
  }
});