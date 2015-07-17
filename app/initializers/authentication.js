import AuthemAuthenticator from '../authenticators/authem';

export function initialize(_, application) {
  application.register('authenticators:authem', AuthemAuthenticator);
}

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: initialize
};
