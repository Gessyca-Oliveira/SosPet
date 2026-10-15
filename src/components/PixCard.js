import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { colors, DISPLAY } from '../theme';
import { images } from '../assets/images';
import { PIX_KEY } from '../config/constants';

export default function PixCard() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await Clipboard.setStringAsync(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Faça sua doação</Text>

      <View style={styles.qr}>
        {images.qrcode ? (
          <Image source={images.qrcode} style={styles.qrImg} resizeMode="contain" />
        ) : (
          <Text style={styles.qrText}>QR CODE</Text>
        )}
      </View>

      <Text style={styles.label}>CHAVE PIX</Text>
      <View style={styles.row}>
        <TextInput value={PIX_KEY} editable={false} style={styles.input} />
        <Pressable style={[styles.copyBtn, copied && { backgroundColor: colors.green }]} onPress={copy}>
          <Text style={styles.copyText}>{copied ? 'Copiado!' : 'Copiar'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.cream, borderRadius: 22, padding: 20, marginTop: 26, alignItems: 'center' },
  title: { fontFamily: DISPLAY, fontSize: 24, fontWeight: '700', color: colors.dark },
  qr: { width: 150, height: 150, backgroundColor: colors.white, borderWidth: 1, borderColor: '#DDD', alignItems: 'center', justifyContent: 'center', marginVertical: 16 },
  qrImg: { width: '100%', height: '100%' },
  qrText: { fontFamily: DISPLAY, fontSize: 18, fontWeight: '800', color: colors.dark },
  label: { alignSelf: 'flex-start', fontSize: 9, fontWeight: '800', color: colors.brown, marginBottom: 4 },
  row: { flexDirection: 'row', gap: 8, width: '100%' },
  input: { flex: 1, backgroundColor: colors.white, borderWidth: 1, borderColor: '#CCC', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8, fontSize: 12, color: colors.dark },
  copyBtn: { backgroundColor: colors.dark, borderRadius: 8, paddingHorizontal: 16, justifyContent: 'center' },
  copyText: { color: colors.white, fontSize: 12, fontWeight: '700' },
});