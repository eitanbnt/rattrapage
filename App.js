import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nbSaisi, setNbSaisi] = useState('');

  const max = 11;
  const random = Math.floor(Math.random()*max);
  console.log(random);
  const [nb, setNb] = useState(random);
  const [count, setCount] = useState(0);
  console.log(count);

  //setCount(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titre}>Rattrapage</Text>
        </View>
      <View>
        <Text>Tentatives</Text>
        <Text 
        defaultValue={count}/>
      </View>
      <View>
      <TextInput
        style={{height: 40}}
        placeholder="Rentrer un nombre"
        onChangeText={newNbSaisi => setNbSaisi(newNbSaisi)}
        defaultValue={nbSaisi}
      />
      </View>
      <View>
      <Button
        title="Confirmer"
        onPress={() => setCount(count + 1)}
      />
      </View>
      <View>
        <Text>C'est plus</Text>
        <Text>C'est moins</Text>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontSize: 30,
  },
});
