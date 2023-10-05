import {useState} from 'react';
import Home from '~presentation/home/Home';

const HomeContainer = () => {
  const [musicMode, setMusicMode] = useState<boolean>(true);
  const toggleMode = () => {
    setMusicMode(!musicMode);
  };

  return <Home toggleMode={toggleMode} musicMode={musicMode} />;
};

export default HomeContainer;
