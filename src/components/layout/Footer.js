import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, BODY, BODY_MEDIUM, BODY_SEMIBOLD } from '../../theme';
import { LINKS } from '../../config/constants';

function FooterLink({ label, url }) {
  return (
    <Pressable
      onPress={() => Linking.openURL(url).catch(() => {})}
      accessibilityRole="link"
      hitSlop={6}
      style={({ pressed }) => pressed && { opacity: 0.6 }}
    >
      <Text style={[styles.text, styles.link]}>{label}</Text>
    </Pressable>
  );
}

export default function Footer() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.logo}>SOS</Text>
      <Text style={styles.sub}>BANABUIÚ - CE</Text>

      <View style={{ marginTop: 18, gap: 8 }}>
        <Text style={styles.title}>Contato</Text>
        <FooterLink label="Instagram" url={LINKS.instagram} />
        <Text style={styles.text}>CNPJ:</Text>
        <Text style={styles.text}>Localização: Banabuiú - CE</Text>
      </View>

      <Text style={styles.copy}>
        © 2026 ONG SOS Pet Banabuiú · Feito com amor pelos animais de Banabuiú
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: colors.dark, padding: 24 },
  logo: { fontFamily: DISPLAY, fontSize: 52, lineHeight: 56, color: colors.red },
  sub: { fontFamily: BODY_MEDIUM, color: colors.red, fontSize: 12, letterSpacing: 3, marginTop: -2 },
  title: { fontFamily: BODY_SEMIBOLD, color: colors.orange, fontSize: 14 },
  text: { fontFamily: BODY, color: colors.onDark, fontSize: 14 },
  link: { textDecorationLine: 'underline' },
  copy: { fontFamily: BODY, color: colors.onDarkMuted, fontSize: 12, lineHeight: 18, marginTop: 28, textAlign: 'center' },
});
