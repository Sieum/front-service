import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Platform,
  PermissionsAndroid,
  Dimensions,
} from 'react-native';
import {
  Text,
  Card,
  IconButton,
  Portal,
  Dialog,
  FAB,
  Modal,
} from 'react-native-paper';
// import GoogleMap from './GoogleMap';
import MapView, {Marker, Region} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

async function requestPermission() {
  try {
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}

const mapWidth = Dimensions.get('window').width;
let mapHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  // 지도 관련 스타일
  container: {
    flex: 1,
  },
  map: {
    // flex:1로 바꾸면 터짐
    width: mapWidth,
    height: mapHeight * 0.9,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  fab: {
    margin: 3,
    backgroundColor: '#FCD34D',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 투명 배경 설정
  },
  modalContent: {
    backgroundColor: 'yellow', // 투명
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  transparentImage: {
    width: 100,
    height: 100,
    opacity: 1.0, // 이미지의 투명도 조절
    position: 'absolute',
    bottom: 30,
    zIndex: 10,
  },
  // 음악 관련 스타일
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
    height: mapHeight * 0.1,
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
    <View style={styles.topbar} id="myComponent">
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
  // MapView에 대한 참조, 현재 지도 영역을 저장하는 상태 변수
  const mapRef = useRef<MapView | null>(null);
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);

  // 현재 위치 정보에 대한 상태관리 (디퐅트 값은 멀캠 좌표)
  const [location, setLocation] = useState({
    latitude: 37.5013,
    longitude: 127.0397,
  });

  // 모달창 상태관리
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleZoomIn = () => {
    if (currentRegion && mapRef.current) {
      // 만약 현재 지도 영역과 맵 참조가 존재한다면
      // 경도, 위도 범위를 줄여서 지도를 확대
      const newRegion: Region = {
        ...currentRegion,
        latitudeDelta: currentRegion.latitudeDelta / 2,
        longitudeDelta: currentRegion.longitudeDelta / 2,
      };
      // animateToRegion 함수를 사용하여 부드럽게 축소
      mapRef.current.animateToRegion(newRegion, 500);
    }
  };

  const handleZoomOut = () => {
    if (currentRegion && mapRef.current) {
      // 만약 현재 지도 영역과 맵 참조가 존재한다면
      // 경도, 위도 범위를 늘려서 지도를 축소
      const newRegion: Region = {
        ...currentRegion,
        latitudeDelta: currentRegion.latitudeDelta * 2,
        longitudeDelta: currentRegion.longitudeDelta * 2,
      };
      mapRef.current.animateToRegion(newRegion, 500);
    }
  };

  // 현재 위치에 대한 관리
  useEffect(() => {
    requestPermission().then(result => {
      console.log({result});
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            const {latitude, longitude} = pos.coords; // 위치 정보에서 위도와 경도 추출
            setLocation({latitude: latitude, longitude: longitude}); // 위도와 경도를 포함한 객체를 상태 변수에 저장
            console.log('현재 위도: ' + latitude);
            console.log('현재 경도: ' + longitude);
            console.log('location 위도: ' + location.latitude);
            console.log('location 경도: ' + location.longitude);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: false,
            timeout: 50000,
          },
        );
      }
    });
  }, []);

  if (!location) {
    return (
      <View>
        <Text>Splash Screen</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/*  MapView에 대한 참조를 연결합니다.
      멀캠 좌표 (37.5013, 127.0397) */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // 지도 영역 변경 시 현재 지도 영역 업데이트
        onRegionChangeComplete={region => setCurrentRegion(region)}>
        {/* 지도 상에 마커 추가 클릭했을 때 showModal함수로 모달창 띄우기*/}
        <Marker
          coordinate={{
            latitude: 37.5013,
            longitude: 127.0397,
          }}
          title="모달 테스트"
          description="클릭하면 상세 모달창 뜸"
          onPress={showModal}
        />
      </MapView>
      {/* 확대, 축소 버튼 */}
      <View style={styles.buttonContainer}>
        <FAB icon="plus" style={styles.fab} onPress={handleZoomIn} />
        <FAB icon="minus" style={styles.fab} onPress={handleZoomOut} />
      </View>

      {/* 모달창 정보 */}
      <View>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal}>
            <View style={styles.modalContainer}>
              <Image
                source={require('~images/hand.png')}
                style={[styles.logo, styles.transparentImage]}
              />
              <View style={styles.modalContent}>
                <Text>여기에 각종 정보 들어갈 예정</Text>
                <Text>여기에 각종 정보 들어갈 예정</Text>
                <Text>여기에 각종 정보 들어갈 예정</Text>
                <Text>여기에 각종 정보 들어갈 예정</Text>
                <Text>여기에 각종 정보 들어갈 예정</Text>
                <Text>여기에 각종 정보 들어갈 예정</Text>
              </View>
            </View>
          </Modal>
        </Portal>
      </View>
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
