import {useEffect, useState} from 'react';
import Home from '~presentation/home/Home';
import {getMyProfile} from '~apis/memberApi';
import {myProfileInfoAtom} from '~recoil/MemberAtom';
import {useSetRecoilState} from 'recoil';

const HomeContainer = () => {
  const [musicMode, setMusicMode] = useState<boolean>(true);
  const setMyProfileInfoAtom = useSetRecoilState(myProfileInfoAtom);
  const toggleMode = () => {
    setMusicMode(!musicMode);
  };

  useEffect(() => {
    getMyProfile().then(res => {
      setMyProfileInfoAtom(res.data);
    });
  }, []);

  return <Home toggleMode={toggleMode} musicMode={musicMode} />;
};

export default HomeContainer;
