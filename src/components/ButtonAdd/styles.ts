import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    backgroundColor: themes.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,    
  },
});