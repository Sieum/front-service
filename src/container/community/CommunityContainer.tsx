import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

// 가짜 게시글 데이터 (실제로는 API 호출 필요)
const postData = [
  {
    id: '1',
    username: 'user1',
    userProfileImage: require('src/static/images/profileimage.png'),
    postImage: require('src/static/images/cover.png'),
    caption: '게시글 내용 1',
  },
  {
    id: '2',
    username: 'user2',
    userProfileImage: require('src/static/images/profileimage.png'),
    postImage: require('src/static/images/cover.png'),
    caption: '게시글 내용 2',
  },
  // 다른 게시글 데이터 추가
];

const CommunityContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <View style={styles.userProfileContainer}>
              <Image
                source={item.userProfileImage}
                style={styles.userProfileImage}
              />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <Image source={item.postImage} style={styles.postImage} />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    marginBottom: 16,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300, // 이미지 높이 조절
    resizeMode: 'cover', // 이미지를 화면에 꽉 채우도록 설정
    marginBottom: 8,
  },
  caption: {
    fontSize: 16,
  },
});

export default CommunityContainer;
