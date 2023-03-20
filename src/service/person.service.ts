import { Person } from '../models';
import { faker } from '@faker-js/faker';

const getRandomPolicyNo = () => {
  return faker.random.numeric(10, { allowLeadingZeros: true }).toString();
};
export function createRandomUser(
  userName?: string,
  firstName?: string,
  lastName?: string,
  phone?: string,
  policyNo?: string
): Person {
  return {
    id: faker.datatype.uuid(),
    userName: userName ?? faker.internet.userName(),
    firstName: firstName ?? faker.name.firstName(),
    lastName: lastName ?? faker.name.lastName(),
    phone: phone ?? faker.phone.number('+##-##-###-####'),
    policyNo: policyNo ?? `${getRandomPolicyNo()} | ${getRandomPolicyNo()}`,
  };
}
const data: Person[] = [
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(
    'ann.lieb@',
    'Ann',
    'Liebmann',
    '+27-61-453-5444',
    '0013983887 | 0013983887'
  ),
  createRandomUser(
    'ann.summer@',
    'Ann',
    'Summer',
    '+27-61-453-5444',
    '0013983887 | 0013983887'
  ),
  createRandomUser(
    'anna.samuel@',
    'Anabelle',
    'Samuel',
    '+27-61-453-5444',
    '0013983887 | 0013983887'
  ),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
  createRandomUser(),
];
const filterBy = (str: string): Person[] => {
  return data.filter((p) => {
    return (
      p.userName.includes(str) ||
      p.firstName.includes(str) ||
      p.lastName.includes(str) ||
      p.policyNo.includes(str) ||
      p.phone.includes(str)
    );
  });
};
export const PersonService = {
  filterBy,
};
