import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import {useSelector} from 'react-redux';
function DrawerContent(props) {
  const decks = useSelector(state => state.decks);
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Home"
            onPress={() => {
              navigation.navigate('Decks');
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Deck:">
          {Object.keys(decks).map((deck, i) => {
            return (
              <DrawerItem
                key={i}
                label={'\t\t\t' + decks[deck].name}
                onPress={() => {
                  navigation.navigate('Cards', {id: deck});
                }}
              />
            );
          })}
          <DrawerItem
            label="Add New Deck"
            onPress={() => {
              navigation.navigate('Add Deck');
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
