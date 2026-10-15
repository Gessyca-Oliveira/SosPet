import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';
import { images } from '../assets/images';
import Photo from '../components/common/Photo';
import { Eyebrow, Heading } from '../components/common/Typography';

const ACTIONS = [
  { id: 'comida', image: images.acao1, emoji: '🍲', bg: colors.cream, color: colors.brown, text: 'Ajude a garantir comida para animais resgatados.' },
  { id: 'lar', image: images.acao2, emoji: '🏠', bg: colors.brown, color: colors.cream, text: 'Contribua para que eles possam se recuperar e encontrar um novo lar.' },
  { id: 'saude', image: images.acao3, emoji: '💊', bg: colors.cream, color: colors.brown, text: 'Contribua para consultas, medicamentos e procedimentos.' },
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
            <Photo source={a.image} style={styles.image} emoji={a.emoji} bg="#E8D5BF" />
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
  card: { borderRadius: 14, padding: 12, alignItems: 'center' },
  image: { width: '100%', height: 170, borderRadius: 8 },
  text: { fontSize: 12, textAlign: 'center', lineHeight: 17, marginTop: 10, paddingHorizontal: 6, fontStyle: 'italic' },
});