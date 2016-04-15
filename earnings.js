module.exports = function(arr, regNumber){
	var earnings = 0;
	arr.forEach(function(taxi){
		if(taxi.RegistrationNumber === regNumber){
			earnings += Number(taxi.Fare * taxi.Trips);

		}
	})
	return earnings;
}
