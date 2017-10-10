// regex for identifying the address
/*

example data: (src: http://www.gbdba.ca/?page_id=78)

Alliston Badminton Club

Banting Memorial High School
203 Victoria Street East, Alliston

Contact:  Janet Humphrey; 705 435 4148
engiefam@rogers.com

Tuesday 7:30-10 pm

 

Aurora Badminton Club

Dr G.W. Williams Secondary School
39 Dunning Avenue, Aurora, L4G1A2

Contact:  Martin Klinger
mklinger@rogers.com

Tuesday and Thursday 8:15-10:15 pm


*/

var re = new RegExp(',');
var name_add = {}

//This one reads the whole file line by line

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('badminton_clubs.txt')
});


lineReader.on('line', function (line) {
  
  if (re.test(line)){
  	console.log('Line from file:', line);
  	single_store = {}
  	single_store['address'] = line
  	//calculate the distance 


  	url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Toronto&destinations='
  	des = 'New+York+City,NY'
  	des = line
  	api_key = '&key=AIzaSyC0L19NOupSCn1FZQUm36v-WEpxu5zACAc'

  	const request = require('request')
  	// Request the distance from google API
  	request.get(url + des + api_key, function (err,res, body) {
  	if(err) {
  		console.log(err)
  		} else {
  	data = JSON.parse(body)

  	//Modify this to access different JSON fields
  	console.log(data['destination_addresses'])
  	console.log(data['rows'][0]['elements'][0]['distance']['text'])
  		}
  	})


  	}

});

/*
//This one reads the whole file at once
file_path = '/Users/Tarren/Desktop/Coding/nodejs/nearest_address/find_nearest_js/badminton_clubs.txt'

fs = require('fs')
fs.readFile(file_path, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
*/
