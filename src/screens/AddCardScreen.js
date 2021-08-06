import React, {useState, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Card, TextInput, Button} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {ADD_CARD} from '../store/types';
function AddCardScreen(props) {
  //   console.log(props);
  const decks = useSelector(state => state.decks);
  const dispatch = useDispatch();
  //   console.log(TYPES);
  const {route, navigation} = props;
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const {id} = route.params;
  const deckName = decks[id].name;
  useFocusEffect(
    useCallback(() => {
      setQuestion('');
      setAnswer('');
    }, [route]),
  );
  return (
    <Card>
      <Card.Title title={'Adding Card to ' + deckName} />
      <Card.Content>
        <TextInput
          label="Question"
          fullWidth
          value={question}
          onChangeText={e => {
            setQuestion(e);
          }}
          theme={{
            colors: {
              placeholder: 'rgba(0, 0, 0, 0.5)',
              text: 'black',
              primary: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        />
        <TextInput
          outlineColor="rgba(0, 0, 0, 0.5)"
          selectionColor="rgba(0, 0, 0, 0.5)"
          underlineColor="rgba(0, 0, 0, 0.5)"
          theme={{
            colors: {
              placeholder: 'rgba(0, 0, 0, 0.5)',
              text: 'black',
              primary: 'rgba(0, 0, 0, 0.5)',
            },
          }}
          label="Answer"
          fullWidth
          value={answer}
          onChangeText={e => {
            setAnswer(e);
          }}
        />
        <Button
          color="rgba(0, 0, 0, 0.5)"
          style={styles.buttons}
          onPress={() => {
            if (answer && question) {
              dispatch({
                type: ADD_CARD,
                id,
                card: {
                  question,
                  answer,
                },
              });
              setQuestion('');
              setAnswer('');
              alert('Card Added');
            } else {
              if (answer) {
                alert('Please add Question');
              } else alert('Please add answer');
            }
          }}>
          Add Card
        </Button>
        <Button
          color="red"
          style={styles.buttons}
          onPress={() => navigation.navigate('Decks')}>
          Cancel
        </Button>
      </Card.Content>
    </Card>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    marginBottom: 10,
    borderColor: 'red',
    backgroundColor: 'rgba(255,0,0,0.1)',
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 3,
    // width: '50%',
  },
});
export default AddCardScreen;
