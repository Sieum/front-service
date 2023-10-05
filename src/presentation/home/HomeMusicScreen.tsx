import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import HorizontalFlatList from '~components/HorizontalFlatList';

interface Props {
  data: {key: string; title: string; artist: string}[];
}

const HomeMusicScreen: React.FC<Props> = props => {
  return (
    <View>
      <Text variant="headlineLarge" style={styles.listTitle}>
        오늘의 추천 음악
      </Text>
      <HorizontalFlatList data={props.data} />

      <Text variant="headlineLarge" style={styles.listTitle}>
        내 근처 인기 음악
      </Text>
      <HorizontalFlatList data={props.data} />

      <Text variant="headlineLarge" style={styles.listTitle}>
        랜덤 추천 음악
      </Text>
      <HorizontalFlatList data={props.data} />
    </View>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    margin: 10,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
});

export default HomeMusicScreen;
