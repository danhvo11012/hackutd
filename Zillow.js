const Zillow = require('node-zillow'); //import node-zillow from Github
const xml = require('xml-parse');
const parser = require('json-parser');
var zillow = new Zillow('X1-ZWz1838f9ga6tn_17jma');
var fs =  require('fs');
http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz1838f9ga6tn_17jma&state=wa&city=seattle&childtype=neighborhood
var parameters = {
	regionId: '',
	state:'wa',
	county:'',
	city:'seattle',
	childtype:'neighborhood'
};

zillow.get('GetRegionChildren', parameters)
	.then(function(results) {
		
		var obj = {
			table: []
		};	



		for(var i = 0; i<results.response.list.region.length; i++){
			
			var id = i + 1;

			var zID = parseInt(results.response.list.region[i].id); // + "");
			
			var zName = (results.response.list.region[i].name + "");

			var zURL = (results.response.list.region[i].url + "");
			
			var zLat = parseFloat(results.response.list.region[i].latitude);
			
			var zLong = parseFloat(results.response.list.region[i].longitude);
			
			try {
				
				var zIndexPrice = (results.response.list.region[i].zindex[0]._ + "");
			}

			catch(err) {

				var zIndexPrice = -1;

			}

			obj.table.push({"id": id, "zID": zID, "zName": zName, "zURL": zURL, "zLat": zLat, "zLong": zLong});
			
		}
		console.log(obj.table);
		
		fs.writeFile ("zillowParse.json", JSON.stringify(obj), function(err) {
   	 	if (err) throw err;
    		console.log('complete');
    }
);

		
		
	})
