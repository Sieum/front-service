import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// 게시물 아이템의 타입 정의
interface PostItem {
  id: string;
  username: string;
  userProfileImage: number; // 이미지 파일 경로로 수정
  postImage: number; // 이미지 파일 경로로 수정
  caption: string;
}

const postData: PostItem[] = [
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
  const renderPostItem = ({item}: {item: PostItem}) => (
    <View style={styles.postContainer}>
      <View style={styles.userProfileContainer}>
        <Image source={item.userProfileImage} style={styles.userProfileImage} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={item.postImage} style={styles.postImage} />
      <Text style={styles.caption}>{item.caption}</Text>

      {/* 좋아요 및 댓글 버튼 */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          onPress={() => handleLike(item.id)}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>좋아요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleComment(item.id)}
          style={styles.actionButton}>
          <Text style={styles.actionButtonText}>댓글</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleLike = (postId: string) => {
    // 좋아요 버튼을 눌렀을 때의 로직
    // postId를 사용하여 해당 게시물에 대한 좋아요 상태를 업데이트하거나 API 호출
    console.log(`${postId}번 게시글 좋아요`);
  };

  const handleComment = (postId: string) => {
    // 댓글 버튼을 눌렀을 때의 로직
    // postId를 사용하여 해당 게시물에 댓글 창 열기
    console.log(`${postId}번 게시글 댓글 창`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        keyExtractor={item => item.id}
        renderItem={renderPostItem}
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
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#FCD34D',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: 'white',
  },
});

export default CommunityContainer;
