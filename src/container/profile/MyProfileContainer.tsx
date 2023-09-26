import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import {Card, Chip, Divider, IconButton, Text} from 'react-native-paper';
import TextTicker from 'react-native-text-ticker';
import Topbar from '~components/Topbar';
import UserProfile from '~components/UserProfile';

interface MyProfileContainerProps {
  buttonText: string;
}

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

const favoriteGenre = [
  {
    genre: "acuostic",
  },
  {
    genre: "death metal",
  },
  {
    genre: "hard rock",
  },
  {
    genre: "k-pop",
  },
  {
    genre: "j-pop",
  },
];

const MyProfileContainer: React.FC<MyProfileContainerProps> = ({
}) => {

  return (
    <ScrollView style={styles.mainBg}>
      <Topbar title={"마이프로필"} />

      <UserProfile
        profileimage={require('src/static/images/profileimage.png')}
        postNum={5}
        friendNum={55}
        playlistNum={4}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipBox}
        data={favoriteGenre}
        renderItem={({item}) => (
          <View style={styles.chipContainer}>
            <Chip style={styles.chip} textStyle={{color: "white"}}>{item.genre}</Chip>
          </View>
        )}
      />

      <View style={styles.profileMusic}>
        <Card.Cover
          source={require('src/static/images/cover.png')}
          style={styles.cardCover}
        />

        <View style={styles.textBox}>
          <TextTicker
            duration={5000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={400}
          >
            <Text variant="bodyLarge">최대한 길게 작성해보겠습니다 어떻게 될까요 ?</Text>
          </TextTicker>
          {/* <Text variant="bodyLarge">민들레(Single ver.)</Text> */}
          <Text variant="bodyMedium">우효</Text>
        </View>


      </View>

      <View>
        <IconButton
          style={styles.gridIcon}
          icon="grid"
          iconColor="#FCD34D"
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
  mainBg: {
    backgroundColor: "white",
  },
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
  chipBox: {
    flexDirection: "row",
    margin: 5,
  },
  chipContainer: {
    margin: 5,
  },
  chip: {
    alignContent: "space-between",
    backgroundColor: "#FCD34D",
    alignSelf: "center",
  },
  profileMusic: {
    overflow: "hidden",
    width: width / 2,
    alignSelf: "center",
    flexDirection: "row",
  },
  cardCover: {
    width: 50,
    height: 50,
  },
  textBox: {
    marginLeft: 10,
    marginRight: 15,
    alignSelf: "center",
  },
});

export default MyProfileContainer;
