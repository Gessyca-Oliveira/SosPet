// src/app/_layout.tsx  (substitui o conteúdo atual)
import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}