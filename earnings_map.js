module.exports = function(arr){
	var earningsMap = {};


    arr.forEach(function(taxi){
        var regNumber = taxi.RegistrationNumber;
    	var earnings = Number(taxi.Fare * taxi.Trips);

        if( earningsMap[regNumber] === undefined){
            earningsMap[regNumber] = 0;
        }

        earningsMap[regNumber] = earningsMap[regNumber] +  Number(earnings);
    });
    return earningsMap;
}