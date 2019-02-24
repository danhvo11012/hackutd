const Zillow = require('node-zillow'); //import node-zillow from Github
const xml = require('xml-parse');
const parser = require('json-parser');
var zillow = new Zillow('X1-ZWz1838f9ga6tn_17jma');
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
	
		for(var i = 0; i<102; i++){
			
			var zID = parseInt(results.response.list.region[i].id); // + "");
			console.log(zID);
			
			var zName = (results.response.list.region[i].name + "");
			console.log(zName);

			var zURL = (results.response.list.region[i].url + "");
			console.log(zURL);
			
			var zLat = parseFloat(results.response.list.region[i].latitude);
			console.log(zLat);
			
			var zLong = parseFloat(results.response.list.region[i].longitude);
			console.log(zLong);
			
			try {
				
				var zIndexPrice = (results.response.list.region[i].zindex[0]._ + "");
				console.log(zIndexPrice);
			}

			catch(err) {

				var zIndexPrice = -1;
				console.log(zIndexPrice);

			}
			
		}
		
		
	})
