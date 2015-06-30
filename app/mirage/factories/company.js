import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id: i => i,
  name: faker.company.companyName
});
