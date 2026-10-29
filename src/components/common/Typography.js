import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, DISPLAY, DISPLAY_ITALIC, BODY, BODY_SEMIBOLD } from '../../theme';

export function Eyebrow({ children, style }) {
  return <Text style={[styles.eyebrow, style]}>{children}</Text>;
}

export function Heading({ children, style }) {
  return (
    <Text accessibilityRole="header" style={[styles.h2, style]}>
      {children}
    </Text>
  );
}

// Trecho em itálico marrom dentro de um <Heading>
export function Italic({ children }) {
  return <Text style={styles.italic}>{children}</Text>;
}

export function Body({ children, style }) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  eyebrow: { fontFamily: BODY_SEMIBOLD, color: colors.red, fontSize: 12, letterSpacing: 1, marginTop: 10, marginBottom: 6 },
  h2: { fontFamily: DISPLAY, fontSize: 32, lineHeight: 36, color: colors.dark },
  italic: { fontFamily: DISPLAY_ITALIC, color: colors.brown },
  body: { fontFamily: BODY, marginTop: 12, fontSize: 15, lineHeight: 23, color: colors.muted },
});
