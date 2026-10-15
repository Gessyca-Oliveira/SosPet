import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY } from '../../theme';

export default function Footer() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.logo}>SOS</Text>
      <Text style={styles.sub}>BANABUIÚ - CE</Text>

      <View style={{ marginTop: 16, gap: 4 }}>
        <Text style={styles.title}>Contato</Text>
        <Text style={styles.text}>Instagram:</Text>
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
  logo: { fontFamily: DISPLAY, fontSize: 44, fontWeight: '900', color: colors.red },
  sub: { color: colors.red, fontSize: 10, letterSpacing: 3, marginTop: -4 },
  title: { color: colors.orange, fontSize: 11, fontWeight: '700' },
  text: { color: '#CCC', fontSize: 11 },
  copy: { color: '#888', fontSize: 9, marginTop: 24, textAlign: 'center' },
});