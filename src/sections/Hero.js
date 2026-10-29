import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, DISPLAY_ITALIC, BODY, BODY_MEDIUM, BODY_SEMIBOLD } from '../theme';
import { images } from '../assets/images';
import Button from '../components/common/Button';
import Photo from '../components/common/Photo';

export default function Hero({ onNavigate }) {
  return (
    <View style={styles.section}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>🐾 PROTEGENDO OS ANIMAIS DESDE 2018</Text>
      </View>

      <Text style={styles.h1} accessibilityRole="header">Ajude a transformar</Text>
      <Text style={[styles.h1, styles.italic]}>abandono em um</Text>
      <Text style={[styles.h1, { color: colors.red }]}>novo começo.</Text>

      <Text style={styles.lead}>
        Resgatamos, tratamos e castramos animais em situação de rua em Banabuiú. Sua ajuda constrói
        novos recomeços para quem só sabe amar.
      </Text>

      <View style={styles.buttons}>
        <Button title="🐾 Quero ajudar agora" onPress={() => onNavigate('doar')} />
        <Button title="Conheça a ONG" variant="ghost" onPress={() => onNavigate('sobre')} />
      </View>

      <View style={styles.photoWrap}>
        <Photo source={images.hero} style={styles.photo} alt="Animal resgatado pela SOS Pet" />
        <View style={styles.seal}>
          <Text style={styles.sealNum}>+500</Text>
          <Text style={styles.sealText}>Animais salvos</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>
            Sua doação ajudará a <Text style={{ color: colors.red }}>transformar</Text> vidas!
          </Text>
        </View>
      </View>

      <View style={styles.proof}>
        <View style={{ flexDirection: 'row' }}>
          {[images.avatar1, images.avatar2, images.avatar3].map((src, i) => (
            <Photo key={i} source={src} style={[styles.avatar, { marginLeft: i ? -12 : 0 }]} />
          ))}
        </View>
        <Text style={styles.proofText}>+500 animais já ganharam uma nova chance com a gente.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { paddingHorizontal: 20, paddingVertical: 24 },
  badge: { alignSelf: 'flex-start', backgroundColor: colors.orange, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, marginBottom: 14 },
  badgeText: { fontFamily: BODY_SEMIBOLD, fontSize: 12, color: colors.dark },
  h1: { fontFamily: DISPLAY, fontSize: 46, lineHeight: 50, color: colors.dark },
  italic: { fontFamily: DISPLAY_ITALIC, color: colors.brown },
  lead: { fontFamily: BODY, marginTop: 14, fontSize: 16, lineHeight: 24, color: colors.muted },
  buttons: { flexDirection: 'row', gap: 10, marginTop: 18, flexWrap: 'wrap' },
  photoWrap: { alignSelf: 'center', marginTop: 28, marginBottom: 6 },
  photo: { width: 220, height: 260, borderRadius: 18, borderWidth: 4, borderColor: colors.white },
  seal: { position: 'absolute', top: -22, left: -26, width: 84, height: 84, borderRadius: 42, backgroundColor: colors.red, alignItems: 'center', justifyContent: 'center' },
  sealNum: { fontFamily: DISPLAY, color: colors.white, fontSize: 24, lineHeight: 26 },
  sealText: { fontFamily: BODY_SEMIBOLD, color: colors.white, fontSize: 10, textAlign: 'center', paddingHorizontal: 6 },
  tag: { position: 'absolute', bottom: -14, left: -10, backgroundColor: colors.white, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  tagText: { fontFamily: BODY_MEDIUM, fontSize: 12, color: colors.dark },
  proof: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 30 },
  avatar: { width: 46, height: 46, borderRadius: 23, borderWidth: 2, borderColor: colors.cream },
  proofText: { flex: 1, fontFamily: BODY, fontSize: 13, lineHeight: 19, color: colors.muted },
});