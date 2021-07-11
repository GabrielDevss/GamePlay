import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ListHeader } from '../../components/ListHeader';
import { themes } from '../../global/styles/themes';
import { Header } from '../../components/Header'
import { Fontisto } from '@expo/vector-icons';


import { styles } from './styles';

import BannerImg from '../../assets/banner.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Members } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Gabriel',
      avatar_url: 'https://github.com/GabrielDevss.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Gabriel',
      avatar_url: 'https://github.com/GabrielDevss.png',
      status: 'offline'
    }
  ]

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={themes.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>

          <Text style={styles.title}>
            Lendários
        </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
        </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
      <FlatList
        data={members}
        keyExtractor={(item => item.id)}
        renderItem={({ item }) => (
          <Members data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <ButtonIcon
          title="Entrar na partida"
        />
      </View>


    </View>
  )
}
