import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { FooterLinks } from '../../components/FooterLinks';
import { PrimaryButton } from '../../components/PrimaryButton';
import { theme } from '../../constants/theme';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>UNICAFE App</Text>
          <Text style={styles.subtitle}>¡Bienvenido a Unicafe!</Text>
          <Text style={styles.description}>
            Pide desde tu celular y recoge en la cafetería, evita filas y controla tu alimentación.
          </Text>
          <View style={styles.buttonGroup}>
            <PrimaryButton
              onPress={() => router.push('/login/estudiante')}
              accessibilityLabel="Ingresar como estudiante"
            >
              Soy Estudiante
            </PrimaryButton>
            <PrimaryButton
              variant="primaryAlt"
              onPress={() => router.push('/login/personal')}
              accessibilityLabel="Ingresar como personal"
            >
              Soy Personal
            </PrimaryButton>
          </View>
        </View>
        <FooterLinks />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.bg
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing * 3,
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing * 3
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.text,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.subtext,
    textAlign: 'center'
  },
  buttonGroup: {
    width: '100%',
    gap: theme.spacing * 2
  }
});
