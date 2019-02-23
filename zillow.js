const Zillow = require('node-zillow'); //import node-zillow from Github
const xml = require('xml-parse')
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
		console.log(results.response);
		console.log(typeof(results));
		var parssedXMl = xml.parse(results);
		console.log(parsedXML);
	})
