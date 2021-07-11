import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { CategorySelect } from '../../components/CategorySelect';
import { SmallInpunt } from '../../components/SmallInpunt';
import { RectButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { GuildIcon } from '../../components/GuildIcon';
import { ModalView } from '../../components/ModalView';
import { TextArea } from '../../components/TextArea';
import { themes } from '../../global/styles/themes';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Feather } from '@expo/vector-icons';
import { Guilds } from '../Guilds';

import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleOpenGuildsSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar partida"
          />
          <Text style={
            [styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
          >
            Categoria
      </Text>
          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
          <View style={styles.form}>
            <RectButton
              onPress={handleOpenGuilds}
            >
              <View style={styles.select}>

                {
                  guild.icon ? <GuildIcon /> : <View style={styles.image} />
                }

                <View style={styles.selectbody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={24}
                  color={themes.colors.heading}
                />
              </View>
            </RectButton>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
              </Text>

                <View style={styles.column}>
                  <SmallInpunt maxLength={2} />
                  <Text style={styles.divider}>
                    /
            </Text>
                  <SmallInpunt maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minutos
              </Text>

                <View style={styles.column}>
                  <SmallInpunt maxLength={2} />
                  <Text style={styles.divider}>
                    :
            </Text>
                  <SmallInpunt maxLength={2} />
                </View>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={[styles.label, { marginBottom: 13 }]}>
                Descrição
            </Text>

              <Text style={styles.caractereslimit}>
                Max de 100 caracteres
             </Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
          </View>
          <View style={styles.footer}>
            <Button
              title="Agendar"
            />
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleOpenGuildsSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}
