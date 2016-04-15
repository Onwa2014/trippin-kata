module.exports = function(arr, regNumber){
	var totalTrips = 0;
	arr.forEach(function(taxi){
		if(taxi.RegistrationNumber === regNumber){
			totalTrips += taxi.Trips;

		}
	})
	return totalTrips;
}
