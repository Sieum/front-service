import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SpotifyRemoteTabBar from '~components/SpotifyRemoteTabBar';
import HomeTopBar from '~presentation/home/HomeTopBar';
import HomeMapScreenContainer from '~container/home/HomeMapScreenContainer';
import HomeMusicScreenContainer from '~container/home/HomeMusicScreenContainer';

interface Props {
  toggleMode: () => void;
  musicMode: boolean;
}

const Home: React.FC<Props> = props => {
  return (
    <>
      <ScrollView style={styles.mainBg}>
        <HomeTopBar toggleMode={props.toggleMode} />
        {props.musicMode ? (
          <HomeMusicScreenContainer />
        ) : (
          <HomeMapScreenContainer />
        )}
      </ScrollView>
      <SpotifyRemoteTabBar />
    </>
  );
};

const styles = StyleSheet.create({
  // 음악 관련 스타일
  mainBg: {
    backgroundColor: 'white',
  },
});

export default Home;
