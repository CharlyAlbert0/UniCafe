import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FooterLinks } from '../../../components/FooterLinks';
import { PrimaryButton } from '../../../components/PrimaryButton';
import { TextField } from '../../../components/TextField';
import { theme } from '../../../constants/theme';

const institutionalEmailRegex = /.+@.+\.edu$/i;

export default function StudentLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      newErrors.email = 'Ingresa tu correo institucional';
    } else if (!institutionalEmailRegex.test(email.trim())) {
      newErrors.email = 'Usa tu correo institucional (.edu)';
    }

    if (!password.trim()) {
      newErrors.password = 'Ingresa tu contraseña';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: Integrar autenticación real con API institucional.
      router.replace('/dashboard/estudiante');
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
            <Text style={styles.title}>Acceso Estudiante</Text>
            <TextField
              label="Correo institucional"
              placeholder="tu.usuario@universidad.edu"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
              error={errors.email}
            />
            <TextField
              label="Contraseña"
              placeholder="Contraseña"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              error={errors.password}
            />
            <PrimaryButton onPress={handleSubmit} accessibilityLabel="Entrar como estudiante">
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
