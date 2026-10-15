import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { colors, DISPLAY } from '../../theme';
import { MARQUEE_WORDS } from '../../config/constants';

function Group() {
  return (
    <View style={{ flexDirection: 'row' }}>
      {MARQUEE_WORDS.map((word) => (
        <Text key={word} style={styles.text}>
          {word}  🐾  
        </Text>
      ))}
    </View>
  );
}

export default function Marquee() {
  const x = useRef(new Animated.Value(0)).current;
  const [groupWidth, setGroupWidth] = useState(0);

  useEffect(() => {
    if (!groupWidth) return undefined;
    x.setValue(0);
    const loop = Animated.loop(
      Animated.timing(x, { toValue: -groupWidth, duration: 14000, easing: Easing.linear, useNativeDriver: true })
    );
    loop.start();
    return () => loop.stop();
  }, [groupWidth, x]);

  return (
    <View style={styles.band}>
      <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: x }] }}>
        <View onLayout={(e) => !groupWidth && setGroupWidth(e.nativeEvent.layout.width)}>
          <Group />
        </View>
        <Group />
        <Group />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: { backgroundColor: colors.red, paddingVertical: 8, overflow: 'hidden', transform: [{ rotate: '-1deg' }] },
  text: { color: colors.white, fontFamily: DISPLAY, fontWeight: '700', fontSize: 15 },
});