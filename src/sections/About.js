import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';
import { images } from '../assets/images';
import Photo from '../components/common/Photo';
import { Body, Eyebrow, Heading, Italic } from '../components/common/Typography';

function InfoCard({ icon, title, text, bg, titleColor, textColor, iconBg }) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <View style={[styles.icon, iconBg && { backgroundColor: iconBg }]}>
        <Text style={{ fontSize: 18 }}>{icon}</Text>
      </View>
      <Text style={[styles.cardTitle, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.cardText, { color: textColor }]}>{text}</Text>
    </View>
  );
}

export default function About() {
  return (
    <View style={styles.section}>
      <View style={styles.polaroidWrap}>
        <View style={styles.polaroidBack} />
        <View style={styles.polaroid}>
          <Photo source={images.equipe} style={styles.polaroidImg} emoji="👨‍👩‍👧" bg="#E8D5BF" />
          <Text style={styles.caption}>Nossa equipe</Text>
        </View>
      </View>

      <Eyebrow>SOBRE NÓS</Eyebrow>
      <Heading>GENTE COMUM FAZENDO UM</Heading>
      <Heading>
        TRABALHO <Italic>EXTRAORDINÁRIO.</Italic>
      </Heading>
      <Body>
        A SOS Pet Banabuiú atua desde 2018 e, juntos, já conseguimos mudar a vida de mais de 500
        animais em situação de rua. Venha fazer parte e ajude a mudar a vida desses seres que só
        sabem amar!
      </Body>

      <View style={styles.row}>
        <InfoCard
          icon="🛡️"
          title="NOSSA MISSÃO"
          text="Proteger, cuidar e dar novas oportunidades a animais que precisam de ajuda."
          bg={colors.brown}
          titleColor={colors.orange}
          textColor={colors.white}
        />
        <InfoCard
          icon="👁️"
          title="NOSSA VISÃO"
          text="Construir uma comunidade mais consciente e responsável com os animais."
          bg={colors.orange}
          titleColor={colors.brown}
          textColor={colors.dark}
          iconBg={colors.dark}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { paddingHorizontal: 20, paddingVertical: 24 },
  polaroidWrap: { alignItems: 'center', marginVertical: 18 },
  polaroidBack: { position: 'absolute', width: '88%', height: 230, backgroundColor: colors.brown, borderRadius: 18, top: 14, left: '2%' },
  polaroid: { backgroundColor: colors.white, padding: 8, paddingBottom: 22, transform: [{ rotate: '4deg' }], elevation: 4, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 8 },
  polaroidImg: { width: 200, height: 170 },
  caption: { fontStyle: 'italic', fontSize: 10, marginTop: 6, color: colors.dark },
  row: { flexDirection: 'row', gap: 10, marginTop: 18 },
  card: { flex: 1, borderRadius: 14, padding: 14 },
  icon: { width: 34, height: 34, borderRadius: 8, backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  cardTitle: { fontSize: 11, fontWeight: '800' },
  cardText: { fontSize: 10.5, lineHeight: 15, marginTop: 4 },
});