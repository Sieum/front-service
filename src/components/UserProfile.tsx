import React from 'react';
import {Text, View, Image, StyleSheet, ImageSourcePropType} from 'react-native';

interface UserProfileProps {
  profileimage: ImageSourcePropType; // 프로필 이미지 소스 타입
  postNum: number; // 게시물 수
  friendNum: number; // 친구 수
  playlistNum: number; // 플레이리스트 수
}

const UserProfile: React.FC<UserProfileProps> = ({
  profileimage,
  postNum,
  friendNum,
  playlistNum,
}) => {
  return (
    <View style={styles.container}>
      {/* 왼쪽 이미지 */}
      <Image source={profileimage} style={styles.image} />

      {/* 오른쪽 텍스트 세로 두 칸으로 나누고 가운데 정렬 */}
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text
              style={[styles.textItem, styles.centeredText, styles.largeText]}>
              Post
            </Text>
            <Text
              style={[styles.textItem, styles.centeredText, styles.largeText]}>
              {postNum}
            </Text>
          </View>
          <View style={styles.column}>
            <Text
              style={[styles.textItem, styles.centeredText, styles.largeText]}>
              Friend
            </Text>
            <Text
              style={[styles.textItem, styles.centeredText, styles.largeText]}>
              {friendNum}
            </Text>
          </View>
          <View style={styles.column}>
            <Text
              style={[styles.textItem, styles.centeredText, styles.largeText]}>
              Playlist
            </Text>
            <Text
              style={[styles.textItem, styles.centeredText, styles.largeText]}>
              {playlistNum}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 가로로 나열
    alignItems: 'center', // 수직 가운데 정렬
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10, // 이미지와 텍스트 사이 간격 설정
  },
  textContainer: {
    flex: 1, // 오른쪽 텍스트 컨테이너가 남은 공간을 모두 차지
  },
  row: {
    flexDirection: 'row', // 가로로 나열
  },
  column: {
    flex: 1, // 세로로 나뉘는 열에 공간을 균등하게 배분
  },
  textItem: {
    marginBottom: 10, // 각 텍스트 항목 사이 간격 설정 (더 큰 간격)
  },
  centeredText: {
    textAlign: 'center', // 텍스트 가운데 정렬
  },
  largeText: {
    fontSize: 20, // 글자 크기를 크게 조절 (원하는 크기로 수정)
  },
});

export default UserProfile;
