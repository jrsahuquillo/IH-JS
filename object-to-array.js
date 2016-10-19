// --------------------- Object to Array ---------------------------
// Write a function that receives an object and returns an array of its values.

var country;

country = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};

function objectToArray(countryData) {
	var countryArray = [];
	for (var key in countryData) {
		countryArray.push(countryData[key]);
	}
	return countryArray;
}


// Should print [ "Uruguay", "South America", "Montevideo" ]
console.log(objectToArray(country));