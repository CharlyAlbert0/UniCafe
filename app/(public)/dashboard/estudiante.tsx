import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { FooterLinks } from '../../../components/FooterLinks';
import { theme } from '../../../constants/theme';

export default function StudentDashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>📚 Dashboard Estudiante</Text>
          <Text style={styles.description}>
            Haz tu pedido, revisa tu historial y controla tu alimentación.
          </Text>
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
    gap: theme.spacing * 2
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.text,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    color: theme.colors.subtext,
    textAlign: 'center',
    lineHeight: 24
  }
});
