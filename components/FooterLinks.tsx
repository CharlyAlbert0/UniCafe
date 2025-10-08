import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

type FooterLink = {
  label: string;
  icon: JSX.Element;
  url: string;
};

const links: FooterLink[] = [
  {
    label: 'Términos',
    icon: <Ionicons name="document-text-outline" size={16} color={theme.colors.link} />,
    url: 'https://example.com/terminos'
  },
  {
    label: 'Privacidad',
    icon: <MaterialIcons name="privacy-tip" size={16} color={theme.colors.link} />,
    url: 'https://example.com/privacidad'
  },
  {
    label: 'Soporte',
    icon: <MaterialCommunityIcons name="lifebuoy" size={16} color={theme.colors.link} />,
    url: 'mailto:soporte@unicafe.edu'
  }
];

export function FooterLinks() {
  return (
    <View style={styles.container}>
      {links.map((link) => (
        <Pressable
          key={link.label}
          accessibilityRole="link"
          onPress={() => void Linking.openURL(link.url)}
          style={({ pressed }) => [styles.link, pressed && styles.linkPressed]}
        >
          {link.icon}
          <Text style={styles.linkText}> {link.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing * 2,
    flexWrap: 'wrap',
    paddingVertical: theme.spacing * 2
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkPressed: {
    opacity: 0.7
  },
  linkText: {
    color: theme.colors.link,
    fontSize: 14,
    fontWeight: '600'
  }
});
