import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { colors } from '../../theme';

export default function Photo({
  source,
  style,
  alt,
  emoji = '🐶',
  bg = colors.orange,
  autoHeight = false,
  position = 'center',
}) {
  const [ratio, setRatio] = useState(null);

  const flat = StyleSheet.flatten(style) || {};
  const sizeStyle = autoHeight
    ? { ...flat, height: undefined, aspectRatio: ratio || flat.aspectRatio || 4 / 3 }
    : flat;

  if (!source) {
    return (
      <View
        style={[sizeStyle, { backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }]}
        accessible={!!alt}
        accessibilityLabel={alt}
      >
        <Text style={{ fontSize: 36 }}>{emoji}</Text>
      </View>
    );
  }

  return (
    <Image
      source={source}
      style={sizeStyle}
      contentFit="cover"
      contentPosition={position}
      transition={200}
      accessible={!!alt}
      accessibilityLabel={alt}
      onLoad={
        autoHeight
          ? (e) => {
              const { width, height } = e.source;
              if (width && height) setRatio(width / height);
            }
          : undefined
      }
    />
  );
}