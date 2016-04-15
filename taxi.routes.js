module.exports = function(arr,regnumber){
	var route_list = [];
	arr.forEach(function(taxi){
		if(taxi.RegistrationNumber === regnumber){
			route_list.push(taxi.Route);
		}
	});
	return route_list;	
}