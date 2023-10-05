import {atom} from 'recoil';

export const LocationCodeAtom = atom<number>({
  key: 'locationCode',
  default: 0,
});

export const LocationNameAtom = atom<string>({
  key: 'locationName',
  default: '',
});
