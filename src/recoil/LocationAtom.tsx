import {atom} from 'recoil';

export const LocationCodeAtom = atom({
  key: 'locationCode',
  default: 0,
});

export const LocationNameAtom = atom({
  key: 'locationName',
  default: '',
});
