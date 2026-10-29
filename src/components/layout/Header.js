import { useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NAV_ITEMS } from '../../config/constants';
import { BODY_MEDIUM, colors, CONTENT_MAX, DISPLAY, focusStyle, transition } from '../../theme';
import Button from '../common/Button';
import Logo from '../common/Logo';

const COMPACT_BREAKPOINT = 640;

export default function Header({ onNavigate }) {
  const { width } = useWindowDimensions();
  const compact = width < COMPACT_BREAKPOINT;
  const [open, setOpen] = useState(false);

  const go = (key) => {
    setOpen(false);
    onNavigate(key);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.bar}>
        <Logo height={36} />
        <View style={styles.row}>
          {!compact &&
            NAV_ITEMS.map((item) => (
              <Pressable
                key={item.key}
                onPress={() => go(item.key)}
                hitSlop={8}
                accessibilityRole="link"
                style={({ focused }) => [styles.linkBox, focusStyle(focused)]}
              >
                {({ hovered }) => (
                  <Text style={[styles.link, transition, hovered && styles.linkHover]}>{item.label}</Text>
                )}
              </Pressable>
            ))}
          <Button title="Quero doar" icon="paw" onPress={() => go('doar')} style={styles.cta} />
          {compact && (
            <Pressable
              onPress={() => setOpen((v) => !v)}
              accessibilityRole="button"
              accessibilityLabel={open ? 'Fechar menu' : 'Abrir menu'}
              accessibilityState={{ expanded: open }}
              style={({ hovered, focused }) => [styles.menuBtn, hovered && { backgroundColor: colors.cream }, focusStyle(focused)]}
            >
              <Text style={styles.menuIcon}>{open ? '✕' : '☰'}</Text>
            </Pressable>
          )}
        </View>
      </View>

      {compact && open && (
        <View style={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <Pressable
              key={item.key}
              onPress={() => go(item.key)}
              accessibilityRole="link"
              style={({ pressed, hovered, focused }) => [
                styles.menuItem,
                (pressed || hovered) && { backgroundColor: colors.cream },
                focusStyle(focused),
              ]}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: colors.cream, zIndex: 10 },
  bar: {
    width: '100%',
    maxWidth: CONTENT_MAX,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  logo: { fontFamily: DISPLAY, fontSize: 26, color: colors.red, letterSpacing: 1 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 24 },
  linkBox: { paddingVertical: 6, borderRadius: 6 },
  link: { fontFamily: BODY_MEDIUM, fontSize: 14, color: colors.dark },
  linkHover: { color: colors.red, textDecorationLine: 'underline' },
  cta: { paddingHorizontal: 16, paddingVertical: 8, minHeight: 40 },
  menuBtn: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginRight: -8 },
  menuIcon: { fontSize: 22, color: colors.dark },
  menu: { width: '100%', maxWidth: CONTENT_MAX, alignSelf: 'center', marginTop: 8, backgroundColor: colors.white, borderRadius: 20, paddingVertical: 6, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } },
  menuItem: { paddingHorizontal: 20, paddingVertical: 14 },
  menuText: { fontFamily: BODY_MEDIUM, fontSize: 16, color: colors.dark },
});
