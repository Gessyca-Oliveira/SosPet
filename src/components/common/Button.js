import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, BODY_SEMIBOLD, transition, focusStyle, lift } from '../../theme';
import { Paw } from './Icons';

const ICONS = { paw: Paw };

// variant: 'primary' (vermelho) | 'ghost' (contorno)
// icon: 'paw' (opcional) — a pata gira e cresce no hover/toque
export default function Button({ title, onPress, variant = 'primary', icon, style }) {
  const isPrimary = variant === 'primary';
  const Icon = icon ? ICONS[icon] : null;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed, hovered, focused }) => [
        styles.base,
        transition,
        isPrimary ? styles.primary : styles.ghost,
        hovered && (isPrimary ? styles.primaryHover : styles.ghostHover),
        hovered && lift,
        focusStyle(focused),
        pressed && styles.pressed,
        style,
      ]}
    >
      {({ hovered, pressed }) => {
        const textColor = isPrimary || hovered ? colors.white : colors.dark;
        return (
          <View style={styles.content}>
            {Icon && (
              <View style={[transition, (hovered || pressed) && styles.iconActive]}>
                <Icon size={18} color={textColor} />
              </View>
            )}
            <Text style={[styles.text, transition, { color: textColor }]}>{title}</Text>
          </View>
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 999, paddingHorizontal: 20, paddingVertical: 12, minHeight: 46, justifyContent: 'center' },
  primary: { backgroundColor: colors.red },
  primaryHover: { backgroundColor: colors.redDark },
  ghost: { borderWidth: 1.5, borderColor: colors.dark, paddingVertical: 11 },
  ghostHover: { backgroundColor: colors.dark },
  pressed: { opacity: 0.75 },
  content: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
  iconActive: { transform: [{ rotate: '-20deg' }, { scale: 1.2 }] },
  text: { fontFamily: BODY_SEMIBOLD, fontSize: 15 },
});