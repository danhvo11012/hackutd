//import json file
var json_file = require('/Users/datqngo/Desktop/bestHOME/zillow_api/zillowParse.json')
//var data = JSON.parse(json_file);
//console.log(json_file);
//darw map
//console.log(json_file.table.length);
console.log(typeof(-0.120850));
for(var file = 0; file < json_file.table.length; file++)
{
    //console.log('get');
    console.log(typeof(json_file.table[file].zLat));
}
console.log(json_file.table[95].zLat);
if(json_file.table[95].zLat == 47.602124)
  console.log('fuck');
console.log(json_file.table[95].zLong);
function myMap() {
  //initiate a map
  var mapProp= {
    center:new google.maps.LatLng(51.52,-0.120850),
    zoom:5,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //for-loop to place multiple markers
  //for(var file = 0; file < json_file.table.length; file++)
  //{
      //console.log('get');

      var marker = new google.maps.Marker({

        position: new google.maps.LatLng(+json_file.table[95].zLat, +json_file.table[95].zLong),
        map: map_canvas
     });
  //}
} ;

//myMap();
