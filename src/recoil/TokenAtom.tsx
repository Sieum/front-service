import {atom} from 'recoil';

export const AccessTokenAtom = atom({
  key: 'accessToken',
  default: '',
});

export const RefreshTokenAtom = atom({
  key: 'refreshToken',
  default: '',
});
