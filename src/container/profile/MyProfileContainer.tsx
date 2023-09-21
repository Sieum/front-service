import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Button, Divider, Title} from 'react-native-paper';
import UserProfile from '~components/UserProfile';

interface MyProfileContainerProps {
  buttonText: string;
}

// 가상의 게시물 데이터 배열
const postItems = [
  {
    id: 1,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 2,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 3,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 4,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 5,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 6,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 7,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 8,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 9,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 10,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 11,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 12,
    imageSource: require('src/static/images/profileimage.png'),
  },
  {
    id: 13,
    imageSource: require('src/static/images/profileimage.png'),
  },

  // 추가 게시물 아이템을 원하는 만큼 추가
];

const MyProfileContainer: React.FC<MyProfileContainerProps> = ({
  buttonText,
}) => {
  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} 버튼이 클릭되었습니다.`);
  };

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title title="프로필" />
      </Card>

      <Divider />

      <UserProfile
        profileimage={require('src/static/images/profileimage.png')}
        postNum={5}
        friendNum={55}
        playlistNum={4}
      />

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => handleButtonPress(buttonText)}
          color="#FCD34D"
          style={styles.button}>
          {buttonText}
        </Button>
      </View>

      <Divider />

      {/* 게시글 목록 추가 */}
      <View style={styles.postListContainer}>
        <Title>게시글 목록</Title>
        <View style={styles.postContainer}>
          {postItems.map(item => (
            <Card style={styles.postCard} key={item.id}>
              <Card.Cover source={item.imageSource} style={styles.postImage} />
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    marginTop: 10,
  },
  postListContainer: {
    alignItems: 'center',
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  postCard: {
    width: '30%',
    height: 100,
    marginRight: 10,
    marginBottom: 10,
  },
  postImage: {
    height: '100%',
  },
});

export default MyProfileContainer;
