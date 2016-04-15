var assert = require('assert');
var totalTrips = require('../trips');
var minimumFunc = require('../min');
var rec_list = require('../rec_list');
var taxi_trips = require('../taxi_trips');
var taxi_routes = require('../taxi.routes');
var earnings = require('../earnings');
var earningsMap = require('../earnings_map');

var capeTownTaxis = [
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
  },
  {
    "RegistrationNumber": "CA 234 567",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Langa",
    "Fare": 8,
    "Trips": 13
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Cape Town",
    "Fare": 13,
    "Trips": 10
  }
];

var durbanTaxis = [
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
  },
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
  }
];


describe('Total trips', function(){
  it('should return total number of trips for Cape Town taxis', function(){
  	//var areaArr = capeTownTaxis;
  	var results = totalTrips(capeTownTaxis);
    assert.equal(results,54);
  });

  it('should return total number of trips for Durban taxis', function(){
    //var areaArr = capeTownTaxis;
    var results = totalTrips(durbanTaxis);
    assert.equal(results,117);
  });

});

describe('Minimum number of trips', function(){
  it('minimum number of trips for Cape Town taxis', function(){
    var results = minimumFunc(capeTownTaxis,13);
    assert.equal(results,9);
  });

  it('minimum number of trips for Durban taxis', function(){
    var results = minimumFunc(durbanTaxis,20);
    assert.equal(results,9);
  });

});

describe('Record list', function(){
  it('returns a list of records we have for CA 123 456', function(){
    var results = rec_list(capeTownTaxis,"CA 123 456");
    assert.deepEqual(results,[{
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
  }, {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  }]);
  });

  it('minimum number of trips for Durban taxis', function(){
    var results = rec_list(durbanTaxis,"ND 123 456");
    assert.deepEqual(results, [{
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },{
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  }]);
  });

});

describe('Number of trips for a specific taxi', function(){
  it('returns number of trips for specific Cape Town taxi', function(){
    var results = taxi_trips(capeTownTaxis,"CA 234 567");
    assert.equal(results,11);
  });

  it('returns number of trips for specific Durban taxi', function(){
    var results = taxi_trips(durbanTaxis,"ND 234 567");
    assert.equal(results,36);
  });

});

describe('Route list for a specific taxi', function(){
  it('return list of routes for specific Cape Town taxi', function(){
    var results = taxi_routes(capeTownTaxis,"CA 345 678");
    assert.deepEqual(results,["Cape Town - Langa","Cape Town - Cape Town"]);
  });

  it('returns list of routes for specific Durban taxi', function(){
    var results = taxi_routes(durbanTaxis,"ND 345 678");
    assert.deepEqual(results,["Durban - Umbilo","Durban - University of KZN","Durban - Umlazi Station"]);
  });

});
describe('Earnings for a specific taxi', function(){
  it('return earnings for specific Cape Town taxi', function(){
    var results = earnings(capeTownTaxis,"CA 234 567");
    assert.equal(results,132);
  });

  it('returns earnings for specific Durban taxi', function(){
    var results = earnings(durbanTaxis,"ND 234 567");
    assert.equal(results,387);
  });

});

describe('Earnings map', function(){
  it('return earnings map for Cape Town taxis', function(){
    var results = earningsMap(capeTownTaxis);
    assert.deepEqual(results,{"CA 123 456":249,"CA 234 567": 132,"CA 345 678":234});
  });

  it('returns earnings map for Durban taxis', function(){
    var results = earningsMap(durbanTaxis);
    assert.deepEqual(results,{"ND 123 456":218,"ND 234 567":387,"ND 345 678":518});
  });
});


