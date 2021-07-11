import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  label: {
    fontFamily: themes.fonts.title700,
    fontSize: 18,
    color: themes.colors.heading,
   
  },
  form: {
    paddingHorizontal:24,
    marginTop: 32,
  },
  select: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderColor: themes.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden'
  },
  selectbody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: themes.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    color: themes.colors.heading,
    fontFamily: themes.fonts.text500
  },
  description: {
    marginTop: 30
  },
  caractereslimit: {
    fontFamily: themes.fonts.text400,
    fontSize: 13,
    color: themes.colors.highlight
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  }
})