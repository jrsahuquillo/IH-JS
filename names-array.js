// -------------- Names array (Javascript) ---------------
// Write a function that receives an array of names and returns them in a string with , between them. The final two must be separated by and.
var names;

names = [ "Canada", "Mexico", "Turkey", "Japan" ];

function prepare(arrayCountries) {
	var listCountries = "";
	for (i=0; i<= arrayCountries.length-2; i++) {
		if(i === arrayCountries.length-2) {
			listCountries += arrayCountries[i] + " and " + arrayCountries[i+1];
		} else {
		
		listCountries += arrayCountries[i] + ", ";
		}
	}
	return listCountries;
}


// Should print "Canada, Mexico, Turkey and Japan"
console.log(prepare(names));