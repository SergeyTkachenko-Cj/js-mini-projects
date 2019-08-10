'use strict';

const decimalToBinary = (decimal) => { 
	const binary = [];
	
		const convertRecursion = (decimal) => { 
			decimal === 1 ? decimal : convertRecursion(Math.trunc(decimal / 2));
			binary.push(decimal % 2);
		}; 

	try {
		convertRecursion(Math.trunc(decimal));
	} catch(e) { return 'wrong input' }

	return binary.join('')
}

console.log(decimalToBinary(13));
