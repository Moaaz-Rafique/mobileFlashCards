import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FlipCard from 'react-native-flip-card';
function Card({card, flipped}) {
  return (
    <FlipCard
      friction={70}
      perspective={10000}
      flipHorizontal={true}
      flipVertical={false}
      flip={flipped}
      clickable={false}

      //   style={{margin: 10, marginTop: 30, background: 'red'}}
    >
      {/* Face Side */}
      <View style={styles.cardStyle}>
        <Text style={styles.text}>{card.question}</Text>
      </View>
      {/* Back Side */}
      <View style={[styles.cardStyle, {backgroundColor: 'black'}]}>
        <Text style={[styles.text, {color: 'rgb(255,100,100)'}]}>
          {card.answer}
        </Text>
      </View>
    </FlipCard>
  );
}
const styles = StyleSheet.create({
  cardStyle: {
    flex: 0.7,
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
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Card;
