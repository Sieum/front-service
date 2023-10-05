import HomeMusicScreen from '~presentation/home/HomeMusicScreen';
import React from 'react';
import {LocationPlayList} from '~recoil/LocationAtom';
import {useRecoilValue} from 'recoil';

const HomeMusicScreenContainer = () => {
  const locationPlayList = useRecoilValue(LocationPlayList);
  const data = [
    {key: '1', title: '노래1', artist: '가수이름'},
    {key: '2', title: '노래2', artist: '가수이름'},
    {key: '3', title: '노래3', artist: '가수이름'},
    {key: '4', title: '노래4', artist: '가수이름'},
    {key: '5', title: '노래5', artist: '가수이름'},
    {key: '6', title: '노래6', artist: '가수이름'},
    {key: '7', title: '노래7', artist: '가수이름'},
  ];
  return <HomeMusicScreen locationPlayList={locationPlayList} />;
};

export default HomeMusicScreenContainer;
