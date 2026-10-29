import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY, BODY_MEDIUM } from '../theme';
import { STATS } from '../config/constants';

export default function Stats() {
  return (
    <View style={styles.card}>
      <Text style={styles.title} accessibilityRole="header">
        Juntos, já <Text style={{ color: colors.orange }}>conseguimos:</Text>
      </Text>

      <View style={styles.grid}>
        {STATS.map((stat) => (
          <View key={stat.id} style={[styles.item, stat.highlight && { backgroundColor: colors.orange }]}>
            <Text style={[styles.value, stat.highlight && { color: colors.dark }]}>{stat.value}</Text>
            <Text style={[styles.label, stat.highlight && { color: colors.dark }]}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.dark, borderRadius: 24, margin: 16, marginTop: 28, padding: 20 },
  title: { fontFamily: DISPLAY, color: colors.white, fontSize: 32, lineHeight: 36, marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  item: { width: '48%', flexGrow: 1, backgroundColor: colors.darkCard, borderRadius: 14, padding: 16 },
  value: { color: colors.white, fontFamily: DISPLAY, fontSize: 38, lineHeight: 42 },
  label: { fontFamily: BODY_MEDIUM, color: colors.onDark, fontSize: 13, lineHeight: 18, marginTop: 4 },
});