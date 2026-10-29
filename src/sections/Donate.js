import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, BODY_MEDIUM, BODY_SEMIBOLD } from '../theme';
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
  step: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 14 },
  num: { width: 28, height: 28, borderRadius: 14, backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center' },
  numText: { fontFamily: BODY_SEMIBOLD, fontSize: 14, color: colors.dark },
  stepText: { fontFamily: BODY_MEDIUM, color: colors.white, fontSize: 15, lineHeight: 21, flex: 1 },
});