// Correction TP 5 · partie 1
// Fichier : src/app/pokemon/[number].js
// Les crochets : une seule page pour tous les Pokémon (/pokemon/1, /pokemon/25…)

import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
// Le fichier est dans pokemon/ : il faut remonter de 2 dossiers
import POKEMONS from "../../data/pokemons";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  // On lit le numéro dans l'adresse. Attention : c'est un texte, "25"
  const { number } = useLocalSearchParams();

  // find renvoie le premier Pokémon dont le numéro correspond
  // Number() transforme le texte "25" en nombre 25
  const pokemon = POKEMONS.find((p) => p.number === Number(number));

  return (
    <View style={styles.page}>
      {/* Le nom du Pokémon dans la barre du haut */}
      <Stack.Screen options={{ title: pokemon.name }} />

      <Image source={{ uri: `${ARTWORK}${pokemon.number}.png` }} style={styles.image} />
      <Text style={styles.numero}>#{pokemon.number}</Text>
      <Text style={styles.nom}>{pokemon.name}</Text>
      <Text style={styles.type}>{pokemon.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  image: {
    width: 240,
    height: 240,
  },
  numero: {
    fontSize: 16,
    color: "#999",
  },
  nom: {
    fontSize: 32,
    fontWeight: "bold",
  },
  type: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#FFE066",
    fontWeight: "bold",
    overflow: "hidden",
  },
});
