/* Write a function that receives a number and prints a countdown of that number all the way to 0 and then Blast off!. For example, blastOff(3) would print this:
3
2
1
0
Blast off!
*/


function countDown(start) {
	for (start; start >= 0; start--) {
		console.log(start);
	}
	console.log("Blast off!");
}

countDown(5);