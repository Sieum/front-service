import React from 'react';
import MapView, {Marker, Region} from 'react-native-maps';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import ClusteredMapView from 'react-native-map-clustering';
import {FAB, Modal, Portal, Text} from 'react-native-paper';

interface Props {
  mapRef: React.MutableRefObject<MapView | null>;
  markers: {latitude: number; longitude: number}[];
  currentRegion: Region | null;
  setCurrentRegion: React.Dispatch<React.SetStateAction<Region | null>>;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  moveToCurrentLocation: () => void;
}

const HomeMapScreen: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      {/*  MapView에 대한 참조를 연결
      멀캠 좌표 (37.5013, 127.0397)
      처음 지역 원래 location.latitude, location.longitude로 해야 됨..*/}
      <ClusteredMapView
        clusterColor="#FCD34D"
        ref={props.mapRef}
        style={styles.map}
        data={props.markers}
        initialRegion={{
          latitude: 37.5013,
          longitude: 127.0397,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // 지도 영역 변경 시 현재 지도 영역 업데이트
        onRegionChangeComplete={region => props.setCurrentRegion(region)}>
        {/* 지도 상에 마커 추가 클릭했을 때 showModal함수로 모달창 띄우기*/}
        {props.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onPress={() => console.log('Clicked Marker')}>
            <Image
              source={require('~images/profileimage.png')}
              style={styles.cover}
            />
            <Image
              source={require('~images/yellowMarker.png')}
              style={styles.marker}
            />
          </Marker>
        ))}
        {/* <Marker
          coordinate={{
            latitude: 37.5013,
            longitude: 127.0397,
          }}
          title="모달 테스트"
          description="클릭하면 상세 모달창 뜸"
          onPress={showModal}
        /> */}
      </ClusteredMapView>
      {/* 확대, 축소 버튼 */}
      <View style={styles.buttonContainer}>
        <FAB icon="plus" style={styles.fab} onPress={props.handleZoomIn} />
        <FAB icon="minus" style={styles.fab} onPress={props.handleZoomOut} />
        <FAB
          icon="crosshairs-gps"
          style={styles.fab}
          onPress={props.moveToCurrentLocation}
        />
      </View>

      {/* 모달창 정보 */}
      {/*<View>*/}
      {/*  <Portal>*/}
      {/*    <Modal visible={visible} onDismiss={hideModal}>*/}
      {/*      <View style={styles.modalContainer}>*/}
      {/*        <Image*/}
      {/*          source={require('~images/profileimage.png')}*/}
      {/*          style={[styles.logo, styles.transparentProfile]}*/}
      {/*        />*/}
      {/*        <Image*/}
      {/*          source={require('~images/hand.png')}*/}
      {/*          style={[styles.logo, styles.transparentImage]}*/}
      {/*        />*/}
      {/*        <View style={styles.modalContent}>*/}
      {/*          <Text>주소 : {adminArea[1] + ' ' + adminArea[0]}</Text>*/}
      {/*        </View>*/}
      {/*      </View>*/}
      {/*    </Modal>*/}
      {/*  </Portal>*/}
      {/*</View>*/}
    </View>
  );
};
const mapWidth = Dimensions.get('window').width;
let mapHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  // 지도 관련 스타일
  container: {
    flex: 1,
  },
  map: {
    // flex:1로 바꾸면 터짐
    // flex: 1,
    width: mapWidth,
    height: mapHeight,
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
    width: 240,
    height: 160,
  },
  transparentImage: {
    width: 100,
    height: 100,
    opacity: 1.0, // 이미지의 투명도 조절
    position: 'absolute',
    bottom: 30,
    zIndex: 10,
  },
  transparentProfile: {
    width: 100,
    height: 100,
    opacity: 1.0, // 이미지의 투명도 조절
    position: 'absolute',
    bottom: 85,
    zIndex: 10,
    borderRadius: 75,
  },
  marker: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  cover: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  logo: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
});

export default HomeMapScreen;
