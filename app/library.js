'use strict'
function findMissing(x, y){
	if(x === [] || y ===[]){
		return 0;
	}
	if(x.length === y.length){
		return 0
	}
	return y[(y.length)-1]
	
  
		
}

module.exports = {
	findMissing : findMissing
};