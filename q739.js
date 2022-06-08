var dailyTemperatures = function(temperatures) {
	// create the result array with same length as temperatures array
	// we will be adding num of days from right to left in this array
    const result = new Array(temperatures.length);
    const monoStack = [];
    
    for(let idx = temperatures.length - 1; idx >= 0; --idx) {
        const temp = temperatures[idx];
		
		// if the top value of the stack is less than the current temp, that is not the warmer temp so we pop the values until we find temp which is greater
		// also since for the next temp (r to l), out of current temp and stack top, the current temp value is greater
		// so it is more probable to find the next greater temp with this value than the top value
        while(monoStack.length && monoStack[monoStack.length - 1][0] <= temp) {
            monoStack.pop();
        }
		// calculate the num of days, just subtract the index values
        const numOfDays = monoStack.length ? (monoStack[monoStack.length - 1][1] - idx) : 0;
        result[idx] = numOfDays;
		
		// pushing both the temp and the index, as we want to compare the temperature and use index to find the days
		// OR we can only add index even, and while comparing get the value from temperatures array
        monoStack.push([temp, idx]);

        console.log(monoStack)
    }
    return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))	//	=>	[1,1,4,2,1,1,0,0]
// console.log(dailyTemperatures([30,40,50,60]))	//	=>	[1,1,1,0]