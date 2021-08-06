import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, Button, HelperText} from 'react-native-paper';
function Deck({deck, navigation}) {
  return (
    <Card style={styles.card} elevated elevation={0}>
      <Card.Title
        title={deck.name}
        subtitle={'No of Cards: ' + deck.cards.length}
      />
      <Card.Content>
        {deck.cards.length > 0 ? (
          <Button
            color="rgba(255,255,255,.8)"
            style={styles.buttons}
            onPress={() => navigation.navigate('Cards', {id: deck.id})}
            //  onPress={
            //   deck.cards.length < 5
            //   ? () => navigation.navigate('Add Card', {id: deck.id})
            //   : null
            // }
          >
            Take this Quiz
          </Button>
        ) : (
          <HelperText style={{textAlign: 'center'}}>
            Please Add a Card to Take this Quiz
          </HelperText>
        )}
        <Button
          color="rgba(0, 0,0, 0.5)"
          style={styles.buttons}
          onPress={() => navigation.navigate('Add Card', {id: deck.id})}>
          Add new card
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
export default Deck;
