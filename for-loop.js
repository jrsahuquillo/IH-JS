/*Write a for loop that sings! Starting with one, each run through the loop should print a bunch of la until you print out lalalalalalalalalala. Like this:

la
lala
lalala
...
lalalalalalalalalala
*/

var i;
var song = "la";
console.log(song);

for (i = 1; i < 10; i++ ) {
	song += "la";
	console.log(song);
}