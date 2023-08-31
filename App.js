import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nbSaisi, setNbSaisi] = useState('');

  const max = 11;
  const random = Math.floor(Math.random() * max);
  //console.log(random);
  const [nb, setNb] = useState(random);
  const [count, setCount] = useState(0);
  const [res, setRes] = useState('');
  //console.log(count);

  const Comparator = () => {
    if (nb == nbSaisi) {
      setCount(0);
      setRes('Ok');
      setNb(random);
    } else {
      setCount(count + 1)
      if (nb < nbSaisi) {
        setRes(`C'est moins`);
      }else{
        setRes(`C'est plus`);
      }
    }
  }

  // setTimeOut(() =>{
  //   Alert.alert('Test');
  // }, 5000);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.titre}>Rattrapage</Text>
      </View>
      <View style={styles.background}>
        <Text>Tentatives</Text>
        <Text>{count}</Text>
      </View>
      <View  style={styles.background}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Rentrer un nombre"
          onChangeText={newNbSaisi => setNbSaisi(newNbSaisi)}
          defaultValue={nbSaisi}
        />
      </View>
      <View>
        <Button
          title="Confirmer"
          onPress={() => Comparator()}
        />
      </View>
      <View style={styles.background}>
        <Text>{res}</Text>
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
  background: {
    borderWidth: 2,
    width: 300,
    alignItems: "center",
  },
});
