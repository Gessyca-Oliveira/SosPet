import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, BODY_MEDIUM, BODY_SEMIBOLD } from '../../theme';
import { NAV_ITEMS } from '../../config/constants';

export default function Header({ onNavigate }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.bar}>
        <Text style={styles.logo}>SOS</Text>
        <View style={styles.row}>
          {NAV_ITEMS.map((item) => (
            <Pressable key={item.key} onPress={() => onNavigate(item.key)} hitSlop={8} accessibilityRole="link">
              <Text style={styles.link}>{item.label}</Text>
            </Pressable>
          ))}
          <Pressable style={styles.cta} onPress={() => onNavigate('doar')} accessibilityRole="button">
            <Text style={styles.ctaText}>🐾 Quero doar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 12, paddingTop: 8, paddingBottom: 4, backgroundColor: colors.cream, zIndex: 10 },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: { fontFamily: DISPLAY, fontSize: 26, color: colors.red, letterSpacing: 1 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  link: { fontFamily: BODY_MEDIUM, fontSize: 14, color: colors.dark },
  cta: { backgroundColor: colors.red, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 9 },
  ctaText: { fontFamily: BODY_SEMIBOLD, color: colors.white, fontSize: 13 },
});
