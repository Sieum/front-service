import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import HorizontalFlatList from '~components/HorizontalFlatList';

interface MyLocationCurrentPlayingMusicList {
  uid: string;
  nickname: string;
  profileImg: string;
  musicUri: string;
  albumTitle: string;
  albumArtistName: string;
  albumImg: string;
  createdAt: number;
  latitude: number;
  longitude: number;
}

interface Props {
  locationPlayList: MyLocationCurrentPlayingMusicList[];
}

const HomeMusicScreen: React.FC<Props> = props => {
  return (
    <View>
      <Text variant="headlineLarge" style={styles.listTitle}>
        오늘의 추천 음악
      </Text>
      <HorizontalFlatList locationPlayList={props.locationPlayList} />

      <Text variant="headlineLarge" style={styles.listTitle}>
        내 근처 인기 음악
      </Text>
      <HorizontalFlatList locationPlayList={props.locationPlayList} />

      <Text variant="headlineLarge" style={styles.listTitle}>
        랜덤 추천 음악
      </Text>
      <HorizontalFlatList locationPlayList={props.locationPlayList} />
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
