import React from 'react';
import { Text, View, Image, Alert } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';


import { styles } from './styles';
import { useAuth } from '../../hooks/auth';

export function SingIn() {
const { user, singIn } = useAuth();  

async function handleSingIn() {
    try { 
      await singIn(); 
    }catch (error){
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
         </Text>
          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSingIn}
          />
        </View>
      </View>
    </Background>
  );
}

