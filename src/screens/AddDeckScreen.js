import React, {useState, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Card, TextInput, Button} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {ADD_DECK} from '../store/types';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

function AddCardScreen(props) {
  //   console.log(props);
  const dispatch = useDispatch();
  //   console.log(TYPES);
  const {route, navigation} = props;
  const [deckName, setDeckName] = useState('');
  const id = uuidv4();
  useFocusEffect(
    useCallback(() => {
      setDeckName('');
    }, []),
  );
  return (
    <Card style={styles.card}>
      <Card.Content
        style={{
          justifyContent: 'space-around',
          height: '100%',
        }}>
        <TextInput
          label="Name"
          fullWidth
          value={deckName}
          onChangeText={e => {
            setDeckName(e);
          }}
          theme={{
            colors: {
              placeholder: 'rgba(0, 0, 0, 0.5)',
              text: 'black',
              primary: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        />
        <View>
          <Button
            style={styles.buttons}
            color="white"
            onPress={() => {
              alert('Deck has been added');
              dispatch({
                type: ADD_DECK,
                id,
                deck: {
                  id,
                  name: deckName,
                  cards: [],
                },
              });
              setDeckName('');
            }}>
            Add Card
          </Button>
          <Button
            color="red"
            style={styles.buttons}
            onPress={() => navigation.navigate('Decks')}>
            Cancel
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    margin: 10,
    flex: 0.95,
    marginBottom: 10,
    // borderColor: 'red',
    backgroundColor: 'rgba(255,0,0,0.1)',
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 3,
    // width: '50%',
  },
});
export default AddCardScreen;
