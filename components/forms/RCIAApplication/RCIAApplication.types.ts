export type MaritalStatus =
  | ''
  | 'single'
  | 'married'
  | 'inRelationship'
  | 'divorcedSeparated'
  | 'engaged';

export type YesNo = '' | 'yes' | 'no';

export interface RCIAApplicationFormData {
  firstName: string;
  surname: string;
  knownAs: string;
  gender: string;
  dateOfBirth: string;
  maritalStatus: MaritalStatus;
  isFirstMarriage: YesNo;
  isBaptised: YesNo;
  dateOfBaptism: string;
  placeOfBaptism: string;
  religion: string;
  receivedFirstHolyCommunion: YesNo;
  dateOfFirstHolyCommunion: string;
  placeOfFirstHolyCommunion: string;
  address: string;
  phoneNumber: string;
  email: string;
  whichParish: string;
  whichMass: string;
  catechumenName: string;
  catechumenDate: string;
  sponsorName: string;
  sponsorDate: string;
}

export type RCIAApplicationFieldErrors = Partial<Record<keyof RCIAApplicationFormData, string>>;


export interface YesNoGroupProps {
  name: string;
  value: YesNo;
  onChange: (value: YesNo) => void;
}