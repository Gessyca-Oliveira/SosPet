import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Ellipse, G, Path } from 'react-native-svg';

function Decorative({ children }) {
  return (
    <View aria-hidden pointerEvents="none">
      {children}
    </View>
  );
}

export function Paw({ size = 18, color = '#FFFFFF' }) {
  return (
    <Decorative>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <G fill={color}>
          <Ellipse cx="4.6" cy="10.2" rx="2.1" ry="2.6" transform="rotate(-18 4.6 10.2)" />
          <Ellipse cx="9" cy="5.6" rx="2.2" ry="2.8" transform="rotate(-6 9 5.6)" />
          <Ellipse cx="15" cy="5.6" rx="2.2" ry="2.8" transform="rotate(6 15 5.6)" />
          <Ellipse cx="19.4" cy="10.2" rx="2.1" ry="2.6" transform="rotate(18 19.4 10.2)" />
          <Path d="M12 11.2c-2.9 0-6.2 4-6.2 6.9 0 1.8 1.3 2.7 2.9 2.7 1.4 0 2.2-.8 3.3-.8s1.9.8 3.3.8c1.6 0 2.9-.9 2.9-2.7 0-2.9-3.3-6.9-6.2-6.9Z" />
        </G>
      </Svg>
    </Decorative>
  );
}

export function Shield({ size = 22, color = '#212121' }) {
  return (
    <Decorative>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <Path d="m9 12 2 2 4-4" />
      </Svg>
    </Decorative>
  );
}

export function Eye({ size = 22, color = '#212121' }) {
  return (
    <Decorative>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <Circle cx="12" cy="12" r="3" />
      </Svg>
    </Decorative>
  );
}