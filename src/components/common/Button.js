import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme';

// variant: 'primary' (vermelho) | 'ghost' (contorno)
export default function Button({ title, onPress, variant = 'primary', style }) {
  const isPrimary = variant === 'primary';
  return (
    <Pressable
      onPress={onPress}
      style={[styles.base, isPrimary ? styles.primary : styles.ghost, style]}
    >
      <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textGhost]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 999, paddingHorizontal: 18, paddingVertical: 12 },
  primary: { backgroundColor: colors.red },
  ghost: { borderWidth: 1.5, borderColor: colors.dark, paddingVertical: 11 },
  text: { fontSize: 13 },
  textPrimary: { color: colors.white, fontWeight: '700' },
  textGhost: { color: colors.dark, fontWeight: '600' },
});