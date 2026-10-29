// src/app/index.tsx
import React, { useCallback, useRef } from 'react';
import { LayoutChangeEvent, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../theme';
import Header from '../components/layout/Header';
import Marquee from '../components/layout/Marquee';
import Footer from '../components/layout/Footer';
import { Hero, Stats, About, History, Actions, Donate } from '../sections';

const HEADER_OFFSET = 70;

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const scrollRef = useRef<ScrollView>(null);
  const positions = useRef<Record<string, number>>({});

  const registerSection = (key: string) => (e: LayoutChangeEvent) => {
    positions.current[key] = e.nativeEvent.layout.y;
  };

  const scrollTo = useCallback((key: string) => {
    const y = positions.current[key] ?? 0;
    scrollRef.current?.scrollTo({ y: Math.max(y - HEADER_OFFSET, 0), animated: true });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.cream} />
      <Header onNavigate={scrollTo} />

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignSelf: 'center', width: Math.min(width, 720) }}
      >
        <View onLayout={registerSection('inicio')}>
          <Hero onNavigate={scrollTo} />
        </View>

        <Marquee />
        <Stats />

        <View onLayout={registerSection('sobre')}>
          <About />
        </View>

        <View onLayout={registerSection('historia')}>
          <History />
        </View>

        <View onLayout={registerSection('acoes')}>
          <Actions />
        </View>

        <View onLayout={registerSection('doar')}>
          <Donate />
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
});
