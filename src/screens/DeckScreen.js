import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {FAB} from 'react-native-paper';
import Card from '../components/Card';

function DeckScreen(props) {
  const decks = useSelector(state => state.decks);
  //   console.log(props);
  const {route, navigation} = props;
  const {id} = route.params;
  console.log(decks, decks[id].cards);
  const cards = decks[id].cards;
  const length = cards.length;
  const [cardIndex, setCardIndex] = useState(0);
  const [score, setScore] = useState(100);
  const [currentCard, setCurrentCard] = useState(cards[cardIndex]);
  const [flipped, setFlipped] = useState(false);
  useFocusEffect(
    useCallback(() => {
      // setFlipped(true);
      setCurrentCard(cards[cardIndex]);
    }, [cardIndex]),
  );
  useFocusEffect(
    useCallback(() => {
      setCardIndex(0);
      setScore(0);
      setCurrentCard(cards[0]);
      setFlipped(false);
    }, [id]),
  );
  const loadNextQuestion = scoreChange => {
    let i = cardIndex;
    cardIndex < length - 1
      ? i++
      : navigation.navigate('Result', {id, score: score + scoreChange});
    setCardIndex(i);
    setScore(score + scoreChange);
    setFlipped(false);
  };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}>
      <Card card={currentCard} flipped={flipped} setFlipped={setFlipped} />
      <FAB
        // small
        // icon="skip-next-circle"
        color="white"
        icon="check-circle"
        // label="next"
        style={{...styles.fab, right: 10}}
        onPress={() => {
          loadNextQuestion(1);
        }}
      />
      <FAB
        // small
        color="white"
        icon="close-circle"
        // icon={{source: 'close-circle'}}
        style={[styles.fab, {left: 10, backgroundColor: 'red'}]}
        onPress={() => {
          loadNextQuestion(0);
        }}
      />
      <FAB
        // small
        color="white"
        // icon="close-circle"
        label={'Flip Card'}
        style={{
          ...styles.fab,
          left: '30%',
          padding: 3,
          backgroundColor: '#888',
        }}
        onPress={() => {
          setFlipped(!flipped);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 15,
    height: 55,
    // width: 55,
  },
});
export default DeckScreen;
