import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Button, } from 'react-native-paper';
import BackTopbar from '~components/BackTopBar';

const followersData = [
  {
    id: '1',
    username: 'follower1',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '2',
    username: 'follower2ssssssss',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '3',
    username: 'follower3',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '4',
    username: 'follower4',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '5',
    username: 'follower5',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '6',
    username: 'follower6',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '7',
    username: 'follower7',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '8',
    username: 'follower8',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '9',
    username: 'follower9',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '10',
    username: 'follower10',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '11',
    username: 'follower11',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '12',
    username: 'follower12',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '13',
    username: 'follower13',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
];

const followingData = [
  {
    id: '1',
    username: 'following1',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '2',
    username: 'following2',
    isFollowing: false,
    image: require('src/static/images/profileimage.png'),
  },
  {
    id: '3',
    username: 'following3',
    isFollowing: true,
    image: require('src/static/images/profileimage.png'),
  },
  // ... 다른 팔로잉 데이터
];

const FollowContainer: React.FC = () => {
  const [isFollowersTab, setIsFollowersTab] = useState(true);
  const [data, setData] = useState(
    isFollowersTab ? followersData : followingData,
  );

  const toggleFollowStatus = (id: string) => {
    // 팔로우 상태 토글 로직을 여기에 추가합니다.
    // API 호출 또는 상태 업데이트 등
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          // 현재 사용자와 일치하는 항목을 찾고 팔로우 상태를 토글
          item.isFollowing = !item.isFollowing;
        }
        return item;
      });
    });
  };

  return (
    <View style={styles.mainBg}>
      <BackTopbar title="닉네임 들어감"/>
      <View style={styles.tabButtons}>
        <TouchableOpacity
          style={[styles.tabButton, isFollowersTab && styles.activeTabButton]}
          onPress={() => {
            setIsFollowersTab(true);
            setData(followersData);
          }}>
          <Text variant="titleMedium">팔로워</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, !isFollowersTab && styles.activeTabButton]}
          onPress={() => {
            setIsFollowersTab(false);
            setData(followingData);
          }}>
          <Text variant="titleMedium">팔로잉</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.userItem}>
            <View>
              <Image source={item.image} style={styles.userImage} />
            </View>
            <View>
              <Text variant="bodyLarge">{item.username}</Text>
            </View>
            <View>
              <Button
                onPress={() => toggleFollowStatus(item.id)}
                style={styles.followButton}>
                <Text variant="bodyMedium">
                  {item.isFollowing ? '언팔로우' : '팔로우'}
                </Text>
              </Button>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBg: {
    backgroundColor: "white",
  },
  tabButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#FCD34D',
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
  },
  followButton: {
    width: 100,
    backgroundColor: '#FCD34D',
  },
});

export default FollowContainer;
