//printReverse

var array = [1,2,3,4,5,6]

function printReverse(array){
	for (var i = array.length-1 ; i > -1; i--) {
		console.log(array[i]);
};


//isUniform()

function isUniform(num){
	for (var i = 0; i < num.length-1; i++){
		if (num[i] == num[i+1]){
			return(true);
		} else {
			return(false);
		};
	};
};

// sumArray()

var sum = 0

function sumArray(array){
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i]
	};
	return(sum)
};

//max()

function max(array){
	var num = 0
	for (var i = 0; i < array.length; i++) {
		if (num < array[i]){
			num = array[i]
		};
	};
	return(num);
}

