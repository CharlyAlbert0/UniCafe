import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FooterLinks } from '../../../components/FooterLinks';
import { PrimaryButton } from '../../../components/PrimaryButton';
import { TextField } from '../../../components/TextField';
import { theme } from '../../../constants/theme';

export default function StaffLoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleSubmit = () => {
    const newErrors: { username?: string; password?: string } = {};
    if (!username.trim()) {
      newErrors.username = 'Ingresa tu correo o número';
    }

    if (!password.trim()) {
      newErrors.password = 'Ingresa tu contraseña';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: Integrar autenticación real para personal.
      router.replace('/dashboard/personal');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperar contraseña', 'Funcionalidad disponible próximamente.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <Text style={styles.title}>Acceso Personal</Text>
            <TextField
              label="Correo o número"
              placeholder="usuario@universidad.edu"
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
              error={errors.username}
            />
            <TextField
              label="Contraseña"
              placeholder="Contraseña"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              error={errors.password}
            />
            <PrimaryButton
              variant="primaryAlt"
              onPress={handleSubmit}
              accessibilityLabel="Entrar como personal"
            >
              Entrar
            </PrimaryButton>
            <Text style={styles.forgotPassword} onPress={handleForgotPassword} accessibilityRole="link">
              ¿Olvidaste tu contraseña?
            </Text>
          </View>
          <FooterLinks />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  flex: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing * 3,
    paddingVertical: theme.spacing * 4,
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius,
    padding: theme.spacing * 3,
    gap: theme.spacing * 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.text,
    textAlign: 'center'
  },
  forgotPassword: {
    color: theme.colors.link,
    fontWeight: '600',
    textAlign: 'center'
  }
});
