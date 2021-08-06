import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Deck from '../components/Deck';
function HomeScreen({navigation, ...rest}) {
  const decks = useSelector(state => state.decks);

  // const dispatch = useDispatch();
  // dispatch({type: 'RESET'});
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          margin: 22,
          width: '90%',
        }}>
        {Object.keys(decks).map((deck, i) => {
          // console.log(decks[deck]);
          return <Deck key={i} deck={decks[deck]} navigation={navigation} />;
        })}
        <Button
          color="gray"
          style={styles.buttons}
          onPress={() => {
            navigation.navigate('Add Deck');
          }}>
          Add a New Deck
        </Button>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'rgba(100,0,0,0.1)',
    marginBottom: 3,
    // width: '50%',
  },
});
export default HomeScreen;
