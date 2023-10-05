import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';

interface Props {
  data: {key: string; title: string; artist: string}[];
}

const HorizontalFlatList: React.FC<Props> = props => {
  return (
    <FlatList
      horizontal
      data={props.data}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <View>
          <Card style={styles.card}>
            <Card.Cover
              source={{uri: 'https://picsum.photos/700'}}
              style={styles.musicCard}
            />
          </Card>
          <Text
            variant="bodyMedium"
            style={[styles.musicTitle, styles.textShadow]}>
            {item.title}
          </Text>
          <Text variant="bodyMedium" style={[styles.artist, styles.textShadow]}>
            {item.artist}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cover: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  // 음악 관련 스타일
  mainBg: {
    backgroundColor: 'white',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  card: {
    width: 100,
    margin: 10,
  },
  musicCard: {
    height: 100,
    width: 100,
  },
  musicTitle: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  artist: {
    marginLeft: 15,
  },
});

export default HorizontalFlatList;
