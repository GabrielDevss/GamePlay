import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { themes } from '../../global/styles/themes';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = {
  urlImage: string;
}

export function Avatar({urlImage}: Props) {
  const { secondary50, secondary70 } = themes.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image
      source={{ uri: urlImage }}
      style={styles.avatar}
      />

    </LinearGradient>
  );
}