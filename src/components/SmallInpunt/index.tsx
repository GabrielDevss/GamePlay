import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function SmallInpunt({...rest}: TextInputProps) {
  return(
      <TextInput 
      keyboardType="numeric"
      style={styles.container}
      {...rest}
      />
  )
}