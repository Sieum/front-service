import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions, TextInput} from 'react-native';
import {Card, Button, IconButton, Text} from 'react-native-paper';
import BackTopbar from '~components/BackTopBar';

const CreateComponent = () => {
  const [text, setText] = useState(''); // 텍스트 값을 저장할 state

  // 텍스트가 변경될 때마다 호출되는 함수
  const onChangeText = newText => {
    setText(newText);
  };

  return (
    <>
      <Card mode="contained" style={styles.card}>
        <View style={styles.userProfileContainer}>
          <Image
            source={require('src/static/images/profileimage.png')}
            style={styles.userProfileImage}
          />
          <Text variant="bodyLarge" style={styles.username}>
            유저 이름
          </Text>
        </View>

        <Card.Content style={[styles.cover, styles.contentWithMainBorder]}>
          <View style={styles.buttonContainer}>
            <View style={styles.centeredContainer}>
              <IconButton
                icon="plus"
                size={80}
                onPress={() => {
                  // 음악 선택 기능
                }}
              />
              <Text style={styles.text}>음악 선택하기</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Content style={[styles.content, styles.contentWithBorder]}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="내용을 입력하세요" // 입력란에 힌트 텍스트
              onChangeText={onChangeText} // 텍스트가 변경될 때 호출되는 함수
              value={text} // 입력된 텍스트를 state로부터 가져옴
            />
          </View>
        </Card.Content>

        <Card.Content style={styles.content}>
          <Button
            mode="contained" // mode 수정
            buttonColor="#FCD34D"
            style={styles.btn}
            onPress={() => {
              // 게시글 등록 기능
            }}>
            <Text variant="titleMedium" style={styles.btnText}>
              게시글 등록
            </Text>
          </Button>
        </Card.Content>
      </Card>
    </>
  );
};

const CommunityCreate: React.FC = () => {
  return (
    <View style={styles.mainBg}>
      <BackTopbar title={'게시글 생성'} />
      <CreateComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 0,
  },
  cover: {
    alignSelf: 'center',
    borderRadius: 0,
    width: Dimensions.get('window').width * 0.95,
    height: Dimensions.get('window').width * 0.95,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  content: {
    margin: 5,
  },
  contentWithMainBorder: {
    borderWidth: 1, // 경계선 두께 조절
    borderColor: 'gray', // 경계선 색상 조절
    borderStyle: 'solid', // 경계선 스타일 조절
    padding: 90, // 컨텐츠 주위에 여백 추가
  },
  contentWithBorder: {
    borderWidth: 1, // 경계선 두께 조절
    borderColor: 'gray', // 경계선 색상 조절
    borderStyle: 'solid', // 경계선 스타일 조절
    padding: 10, // 컨텐츠 주위에 여백 추가
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    left: Dimensions.get('window').width * 0.25,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
  },
  btn: {
    marginHorizontal: 15,
  },
  btnText: {
    color: 'white',
  },
  mainBg: {
    backgroundColor: 'white',
  },
});

export default CommunityCreate;
