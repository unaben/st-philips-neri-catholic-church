export interface HouseholdMember {
  id: string;
  name: string;
  dateOfBirth: string;
  relationshipToYou: string;
  religion: string;
}

export type HouseholdMemberField = keyof Omit<HouseholdMember, 'id'>;

export interface ParishRecordFormData {
  yourName: string;
  address: string;
  religion: string;
  postcode: string;
  telNo: string;
  mobile: string;
  email: string;
  nationality: string;
  firstLanguage: string;
  otherAdults: HouseholdMember[];
  children: HouseholdMember[];
  signature: string;
  date: string;
}

export type HouseholdMemberErrors = Partial<Record<HouseholdMemberField, string>>;

export type ParishRecordFieldErrors = Partial<
  Record<
    Exclude<keyof ParishRecordFormData, 'otherAdults' | 'children'>,
    string
  >
> & {
  otherAdults?: HouseholdMemberErrors[];
  children?: HouseholdMemberErrors[];
};

export interface MemberTableProps {
  title: string;
  members: HouseholdMember[];
  errors?: HouseholdMemberErrors[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: HouseholdMemberField, value: string) => void;
  addButtonLabel: string;
  emptyMessage: string;
}
