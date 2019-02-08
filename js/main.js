alert("Hola Mundo");

var x = 5
var y = 10;


var mazdaCars  = [

		{
			company:"mazda",
			model:"mazda6",
			horsePower:"250hp",
			cilinders:"6"
		},{
			company:"mazda",
			model:"mazda 2",
			horsePower:"110hp",
			cilinders:"4"
		}	

]



function printCars(){
	console.log("printCars")
	for ( i = 0; i < mazdaCars.length; i++) {
		//debugger
		var obj1	= mazdaCars[i];
		console.log(obj1);
	}
		

}


console.log(x*y);
console.log(x/y);
console.log(x+y);
console.log(x-y);
