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

}
