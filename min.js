

module.exports = function(arr,max){
var min = max;
 arr.forEach(function(trip){
 	if(trip.Trips < min){
 		min = trip.Trips
 	}	
 });
 return min
};
