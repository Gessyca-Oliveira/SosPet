import React from 'react';
import { Image } from 'expo-image';

const RATIO = 3;

export default function Logo({ height = 40 }) {
  return (
    <Image
      source={require('../../assets/logo-vermelho.svg')}
      style={{ height, width: height * RATIO }}
      contentFit="contain"
      accessibilityLabel="SOS Pet Banabuiú"
    />
  );
}