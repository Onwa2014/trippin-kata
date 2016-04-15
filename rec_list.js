module.exports = function(arr,regNumber){
	var list = [];
	arr.forEach(function(taxi){
		if(taxi.RegistrationNumber === regNumber){
			list.push(taxi);
		}
	})
	return list;
}