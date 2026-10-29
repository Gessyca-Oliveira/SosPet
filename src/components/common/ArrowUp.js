import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function ArrowUp({ size = 24, color = '#FFFFFF' }) {
  return (
    <View aria-hidden pointerEvents="none">
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d="M12 19V5M5 12l7-7 7 7" stroke={color} strokeWidth={2.75} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}