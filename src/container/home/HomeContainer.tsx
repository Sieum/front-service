import {useState} from 'react';
import Home from '~presentation/home/Home';

const HomeContainer = () => {
  const [musicMode, setMusicMode] = useState<boolean>(true);
  const [visible, setVisible] = useState(false);
  const toggleMode = () => {
    console.log('Click toggleMenu');
    setMusicMode(!musicMode);
    setVisible(true);
  };

  // const hideDialog = () => setVisible(false);
  return <Home toggleMode={toggleMode} musicMode={musicMode} />;
};

export default HomeContainer;
