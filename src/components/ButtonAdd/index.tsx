import React from 'react';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { themes } from '../../global/styles/themes';

import { styles } from './styles';

export function ButtonAdd({...rest}: RectButtonProps) {
return(
  <RectButton
    style={styles.container}
    {...rest}
  >
    <MaterialCommunityIcons 
      name="plus"
      color={themes.colors.heading}
      size={24}
    />
  </RectButton>
)
}