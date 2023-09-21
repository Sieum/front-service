import React from 'react';
import MyProfileContainer from 'src/container/profile/MyProfileContainer';

const MyProfile = () => {
  const buttonText = '프로필 수정'; // 동적으로 변경할 텍스트

  return <MyProfileContainer buttonText={buttonText} />;
};

export default MyProfile;
