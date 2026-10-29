import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, BODY } from '../theme';
import { images } from '../assets/images';
import Photo from '../components/common/Photo';
import { Eyebrow, Heading } from '../components/common/Typography';

const ACTIONS = [
  { id: 'comida', image: images.acao1, emoji: '🍲', bg: colors.cream, color: colors.brown, alt: 'Comedouro em rota de alimentação', text: 'Garante ração nas rotas de alimentação, que percorrem a cidade todos os dias.' },
  { id: 'resgate', image: images.acao2, emoji: '🚑', bg: colors.brown, color: colors.cream, alt: 'Cachorro resgatado se recuperando', text: 'Ajuda nos resgates e na recuperação de animais em situação grave.' },
  { id: 'saude', image: images.acao3, emoji: '💊', bg: colors.cream, color: colors.brown, alt: 'Cachorro em atendimento veterinário', text: 'Contribui para consultas, medicamentos, antiparasitários e castrações.' },
];

export default function Actions() {
  return (
    <View style={styles.wrap}>
      <Eyebrow>PARA ONDE VAI SUA AJUDA</Eyebrow>

      <View style={styles.titleRow}>
        <View>
          <Heading>SUA DOAÇÃO VIRA</Heading>
          <Heading style={{ color: colors.red }}>CUIDADO.</Heading>
        </View>
        <Photo source={images.mascote} style={styles.mascot} emoji="🐕" bg="transparent" />
      </View>

      <View style={styles.list}>
        {ACTIONS.map((a) => (
          <View key={a.id} style={[styles.card, { backgroundColor: a.bg }]}>
            <Photo source={a.image} style={styles.image} emoji={a.emoji} bg={colors.photoBg} alt={a.alt} />
            <Text style={[styles.text, { color: a.color }]}>{a.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: colors.white, paddingHorizontal: 16, paddingVertical: 24, borderTopLeftRadius: 28, borderTopRightRadius: 28, marginTop: 12 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  mascot: { width: 90, height: 90, borderRadius: 45 },
  list: { marginTop: 20, gap: 14 },
  card: { borderRadius: 16, padding: 12, paddingBottom: 16, alignItems: 'center' },
  image: { width: '100%', height: 190, borderRadius: 10 },
  text: { fontFamily: BODY, fontSize: 15, textAlign: 'center', lineHeight: 22, marginTop: 12, paddingHorizontal: 6 },
});