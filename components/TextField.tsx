import { forwardRef } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { theme } from '../constants/theme';

type TextFieldProps = TextInputProps & {
  label: string;
  error?: string;
};

export const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ label, error, style, ...props }, ref) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          ref={ref}
          style={[styles.input, style, error && styles.inputError]}
          placeholderTextColor={theme.colors.subtext}
          {...props}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
  }
);

TextField.displayName = 'TextField';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing
  },
  input: {
    backgroundColor: theme.colors.inputBg,
    borderColor: theme.colors.inputBorder,
    borderWidth: 1,
    borderRadius: theme.radius,
    paddingHorizontal: theme.spacing * 1.5,
    paddingVertical: theme.spacing * 1.5,
    fontSize: 16,
    color: theme.colors.text
  },
  inputError: {
    borderColor: theme.colors.danger
  },
  error: {
    color: theme.colors.danger,
    fontSize: 13,
    marginTop: theme.spacing * 0.5
  }
});
