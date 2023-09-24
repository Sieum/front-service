import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {Card, Button, Divider, Appbar, IconButton, Text} from 'react-native-paper';
import UserProfile from '~components/UserProfile';

interface MyProfileContainerProps {
  buttonText: string;
}

const Topbar = ({title}) => {
  const topbarStyle = StyleSheet.create({
      topbar: {
          alignItems: "center",
          textAlign: 'center',
      },
      title: {
          flex: 1,
          alignItems: "center",
          textAlign: 'center',
      },
  });

  return (
      <>
          <Appbar.Header style={topbarStyle.topbar}>
              <Appbar.Content title={title} style={topbarStyle.title}/>
          </Appbar.Header>
          <Divider />
      </>
  );
};

// 가상의 게시물 데이터 배열
const postItems = [
  {
    id: 1,
    imageSource: require('src/static/images/cover.png'),
  },
  {
    id: 2,
    imageSource: require('src/static/images/cover2.png'),
  },
  {
    id: 3,
    imageSource: require('src/static/images/cover.png'),
  },
  {
    id: 4,
    imageSource: require('src/static/images/cover2.png'),
  },
  {
    id: 5,
    imageSource: require('src/static/images/cover.png'),
  },
  {
    id: 6,
    imageSource: require('src/static/images/cover2.png'),
  },
  {
    id: 7,
    imageSource: require('src/static/images/cover.png'),
  },
  {
    id: 8,
    imageSource: require('src/static/images/cover2.png'),
  },
  {
    id: 9,
    imageSource: require('src/static/images/cover.png'),
  },
  {
    id: 10,
    imageSource: require('src/static/images/cover2.png'),
  },
  {
    id: 11,
    imageSource: require('src/static/images/cover.png'),
  },
  {
    id: 12,
    imageSource: require('src/static/images/cover2.png'),
  },
  {
    id: 13,
    imageSource: require('src/static/images/cover.png'),
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
    <ScrollView>
      <Topbar title={"마이프로필"}/>

      <UserProfile
        profileimage={require('src/static/images/profileimage.png')}
        postNum={5}
        friendNum={55}
        playlistNum={4}
      />

      <View>
        <IconButton
          style={styles.gridIcon}
          icon="grid"
          iconColor="yellow"
          size={30}
          onPress={() => {
          }}
        />
        <Divider style={styles.bordDivider}/>
        <FlatList
          style={styles.postContainer}
          keyExtractor={item => item.id}
          data={postItems}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Card elevation={0}>
                <Card.Cover 
                  source={item.imageSource}
                  style={styles.postCard}
                />
              </Card>
            </TouchableOpacity>
          )}
          numColumns={3}
        />
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const cardSize = width / 3;

const styles = StyleSheet.create({
  gridIcon: {
    alignSelf: "center",
  },
  bordDivider: {
    borderWidth: 0.2,
  },
  postContainer: {
    flex: 1,
    flexDirection: "column",
  },
  postCard: {
    height: cardSize,
    width: cardSize,
    justifyContent: "center",
    borderRadius: 0,
    elevation: 0,
  },
  /////////////////////////
  // container: {
  //   flex: 1,
  // },
  // buttonContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  // },
  // button: {
  //   borderRadius: 5,
  //   marginTop: 10,
  // },
  // postListContainer: {
  //   alignItems: 'center',
  // },
  // postContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'flex-start',
  //   alignItems: 'flex-start',
  // },
  // postCard: {
  //   width: '30%',
  //   height: 100,
  //   marginRight: 10,
  //   marginBottom: 10,
  // },
  // postImage: {
  //   height: '100%',
  // },
});

export default MyProfileContainer;
