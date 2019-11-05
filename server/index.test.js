const frisby = require('frisby');

it ('GET should return a status of 200 OK', function () {
    return frisby
      .get('http://localhost:3000/api/contact')
      .expect('status', 200);
  });

  it ('GET should succesfully get a document from the Restaurant DB', function () {
    return frisby
      .get('http://localhost:3000/api/contact')
      .expect('status', 200);
  });