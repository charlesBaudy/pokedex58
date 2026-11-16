// Correction TP 5 · partie 2
// Fichier : src/app/(tabs)/_layout.js
// La barre d'onglets en bas de l'écran

import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"; // bonus : les icônes

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#E03131" }}>
      {/* name = le nom du fichier, title = le texte affiché */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokédex",
          // bonus : color est la couleur de l'onglet (rouge s'il est actif)
          tabBarIcon: ({ color }) => <FontAwesome name="list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
