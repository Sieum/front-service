import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import {Text, Card, IconButton, Portal, Dialog} from 'react-native-paper';
import GoogleMap from './GoogleMap';

const styles = StyleSheet.create({
  mainBg: {
    backgroundColor: 'white',
  },
  centeredText: {
    textAlign: 'center',
  },
  logo: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
  topbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
    // paddingHorizontal: 20, // 양쪽 여백 임시
  },
  tb_left: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  tb_center: {
    flex: 1,
    alignItems: 'center',
  },
  tb_right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  address: {
    fontWeight: 'bold',
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
  listTitle: {
    margin: 10,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
  },
  musicTitle: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  artist: {
    marginLeft: 15,
  },
});

const HorizontalFlatList = () => {
  const data = [
    {key: '1', title: '노래1', artist: '가수이름'},
    {key: '2', title: '노래2', artist: '가수이름'},
    {key: '3', title: '노래3', artist: '가수이름'},
    {key: '4', title: '노래4', artist: '가수이름'},
    {key: '5', title: '노래5', artist: '가수이름'},
    {key: '6', title: '노래6', artist: '가수이름'},
    {key: '7', title: '노래7', artist: '가수이름'},
  ];

  return (
    <FlatList
      horizontal
      data={data}
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

const Topbar = ({onPress}: {onPress: () => void}) => {
  return (
    <View style={styles.topbar}>
      <View style={styles.tb_left}>
        <Image source={require('~images/Logo.png')} style={styles.logo} />
      </View>
      <View style={styles.tb_center}>
        <Text
          variant="titleMedium"
          style={[styles.centeredText, styles.address]}>
          내 위치
        </Text>
        <Text
          variant="titleMedium"
          style={[styles.centeredText, styles.address]}>
          서울특별시 어딘가
        </Text>
      </View>
      <View style={styles.tb_right}>
        <IconButton icon="earth" iconColor="yellow" onPress={onPress} />
      </View>
    </View>
  );
};

const MusicTab = () => {
  return (
    <View>
      <Text variant="headlineLarge" style={styles.listTitle}>
        오늘의 추천 음악
      </Text>
      <HorizontalFlatList />

      <Text variant="headlineLarge" style={styles.listTitle}>
        내 근처 인기 음악
      </Text>
      <HorizontalFlatList />

      <Text variant="headlineLarge" style={styles.listTitle}>
        랜덤 추천 음악
      </Text>
      <HorizontalFlatList />
    </View>
  );
};

const MapTab = () => {
  return (
    <View>
      <GoogleMap />
    </View>
  );
};

const Home = () => {
  const [musicMode, setMusicMode] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleMode = () => {
    setMusicMode(!musicMode);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  return (
    <ScrollView style={styles.mainBg}>
      <Topbar onPress={toggleMode} />
      {musicMode ? <MusicTab /> : <MapTab />}

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>모드 변경</Dialog.Title>
          <Dialog.Content>
            <Text>{musicMode ? '음악 모드 입니다' : '지도 모드 입니다'}</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

export default Home;
