import Login from '../../presentation/start/Login';

const LoginContainer = ({navigation}: any) => {
  const onPress = () => {
    navigation.navigate('LoginWebView');
  };
  return <Login onPress={onPress} />;
};

export default LoginContainer;
