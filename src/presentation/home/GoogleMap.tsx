import React, {useRef, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Portal, Button, Modal} from 'react-native-paper';
import MapView, {Marker, Region} from 'react-native-maps';

const GoogleMap: React.FC = () => {
  // MapView에 대한 참조, 현재 지도 영역을 저장하는 상태 변수
  const mapRef = useRef<MapView | null>(null);
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);

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

  return (
    <View style={styles.container}>
      {/*  MapView에 대한 참조를 연결합니다. */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // 지도 영역 변경 시 현재 지도 영역 업데이트
        onRegionChangeComplete={region => setCurrentRegion(region)}>
        {/* 지도 상에 마커 추가 클릭했을 때 showModal함수로 모달창 띄우기*/}
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="모달 테스트"
          description="클릭하면 상세 모달창 뜸"
          onPress={showModal}
        />
      </MapView>
      {/* 확대, 축소 버튼 */}
      <View style={styles.buttonContainer}>
        <Button onPress={handleZoomIn}>확대</Button>
        <Button onPress={handleZoomOut}>축소</Button>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  logo: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
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
});

export default GoogleMap;
