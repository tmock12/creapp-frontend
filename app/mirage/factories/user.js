import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: i => i,
  firstName: faker.name.firstName,
  lastName: faker.name.firstName,
  phoneNumber: faker.phone.phoneNumber,
  email: faker.internet.email,
  password: 'password'
});
