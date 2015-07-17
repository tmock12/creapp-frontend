import Mirage from 'ember-cli-mirage';

export default function() {

  this.post('/api/v1/registrations', function(db, request) {
    var registrationJSON = JSON.parse(request.requestBody).registration;

    return  {
      registration: {
        user: db.users.insert(registrationJSON.user),
        company: db.companies.insert(registrationJSON.company)
      }
    };
  });

  this.post('/api/v1/sessions', function(db, request) {
    if (request.requestBody && request.requestBody.match('correct')) {
      return new Mirage.Response(201, {email: 'correct@email.com', token: 123456});
    }
    else {
      return new Mirage.Response(422, {errors: 'incorrect email'});
    }
  });

}
