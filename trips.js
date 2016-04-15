module.exports = function(areaArr){
	//this.totalTrips = function(areaArr){
		var total = 0;
		areaArr.forEach(function(taxi){
			total += taxi.Trips;
		});
		return total;
	//}
}