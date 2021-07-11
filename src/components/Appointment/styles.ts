import { StyleSheet } from 'react-native';
import { themes } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontFamily: themes.fonts.title700,
    color: themes.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: themes.fonts.text400,
    color: themes.colors.heading,
    fontSize: 13,
    marginRight: 24
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: themes.fonts.text500,
    color: themes.colors.heading,
    fontSize: 13,
    marginLeft: 7
  },
  player: {
    fontFamily: themes.fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24
  },
  guildIconContainer: {
    width: 68,
    height: 64,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  }

})