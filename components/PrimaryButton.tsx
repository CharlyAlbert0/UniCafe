import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../constants/theme';

type ButtonVariant = 'primary' | 'primaryAlt';

type PrimaryButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  onPress?: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
}>;

export function PrimaryButton({
  children,
  variant = 'primary',
  onPress,
  accessibilityLabel,
  disabled
}: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: theme.colors[variant] },
        pressed && styles.pressed,
        disabled && styles.disabled
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: theme.spacing * 1.5,
    paddingHorizontal: theme.spacing * 2,
    borderRadius: theme.radius,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 48
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16
  },
  pressed: {
    opacity: 0.85
  },
  disabled: {
    opacity: 0.6
  }
});
