import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';

function ResultScreen({route, navigation}) {
  const {id, score} = route.params;
  const decks = useSelector(state => state.decks);
  const thisDeck = decks[id];
  return (
    <Card
      style={styles.cardStyle}
      // sas
    >
      <View style={styles.viewStyle}>
        <Text style={styles.text}>
          You got {score} out of {thisDeck.cards.length} answers correct {'\n'}
        </Text>
        <Text style={styles.text}>
          Percentage : {((100 * score) / thisDeck.cards.length).toFixed(0)}
        </Text>

        <Button
          color="white"
          style={styles.buttons}
          onPress={() => navigation.navigate('Cards', {id})}>
          Retake Quiz
        </Button>
        <Button
          color="red"
          style={styles.buttons}
          onPress={() => navigation.navigate('Decks')}>
          Goto Home
        </Button>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
  },
  viewStyle: {
    padding: 15,
    width: '90%',
    minHeight: 300,
    margin: 20,
    // dropShadow: '0px 0px 5px black',
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'rgba(255,0,0,.1)',
    fontSize: 300,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  buttons: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: 'auto',
    marginBottom: 3,
    width: '100%',
  },
});

export default ResultScreen;
