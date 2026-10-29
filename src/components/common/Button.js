import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, BODY_SEMIBOLD } from '../../theme';

// variant: 'primary' (vermelho) | 'ghost' (contorno)
export default function Button({ title, onPress, variant = 'primary', style }) {
  const isPrimary = variant === 'primary';
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.ghost,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textGhost]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 999, paddingHorizontal: 20, paddingVertical: 12, minHeight: 46, justifyContent: 'center' },
  primary: { backgroundColor: colors.red },
  ghost: { borderWidth: 1.5, borderColor: colors.dark, paddingVertical: 11 },
  pressed: { opacity: 0.75 },
  text: { fontFamily: BODY_SEMIBOLD, fontSize: 15 },
  textPrimary: { color: colors.white },
  textGhost: { color: colors.dark },
});
