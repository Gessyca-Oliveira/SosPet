import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';
import { DONATE_STEPS } from '../config/constants';
import { Body, Eyebrow, Heading } from '../components/common/Typography';
import PixCard from '../components/PixCard';

export default function Donate() {
  return (
    <View style={styles.wrap}>
      <Eyebrow style={{ color: colors.orange }}>SEJA UM DOADOR</Eyebrow>
      <Heading style={{ color: colors.white }}>Cada real vira ração, remédio e exames.</Heading>
      <Body style={{ color: colors.cream }}>
        Nos ajude a continuar fazendo a diferença na vida desses seres. Doe pelo Pix em segundos —
        qualquer valor importa.
      </Body>

      {DONATE_STEPS.map((step, i) => (
        <View key={step} style={styles.step}>
          <View style={styles.num}>
            <Text style={styles.numText}>{i + 1}</Text>
          </View>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}

      <PixCard />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: colors.brown, padding: 20, paddingVertical: 28 },
  step: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12 },
  num: { width: 22, height: 22, borderRadius: 11, backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center' },
  numText: { fontSize: 11, fontWeight: '800', color: colors.dark },
  stepText: { color: colors.white, fontSize: 12, fontWeight: '600', flex: 1 },
});