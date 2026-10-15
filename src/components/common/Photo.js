import React from 'react';
import { Image, Text, View } from 'react-native';
import { colors } from '../../theme';

export default function Photo({ source, style, emoji = '🐶', bg = colors.orange }) {
  if (source) return <Image source={source} style={style} resizeMode="cover" />;

  return (
    <View style={[style, { backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }]}>
      <Text style={{ fontSize: 36 }}>{emoji}</Text>
    </View>
  );
}