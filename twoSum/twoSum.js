const {performance} = require('perf_hooks');

// brute force -- Time Complexity O(n^2)
var twoSum_brute_force = (nums,target) => {
    for(var i =0; i < nums.length; i++){
        if (i==nums.length-1){
            return ('No Solution');
        }
        for(var j =1; j < nums.length - i; j++){
            if(nums[i]+nums[i+j]==target){
                return [i,i+j];
            }
        }
    }
}

//hash method -- Time Complexity O(n)
var twoSum_hash_method = (nums,target) =>{
    hash_map = {}
    for(var i = 0; i <nums.length; i++){
        diff = target - nums[i]
        //seaching key in javascript object is alway O(1)
        if(diff in hash_map){
            return [hash_map[diff],i]
        }
        hash_map[nums[i]] = i
    }
}

// test arrays
test_nums = Array.from(Array(100001).keys())
test_target = 199999


// Performance for hash method 
var start = performance.now();

output = twoSum_hash_method(test_nums,test_target)
console.log(output)

var end = performance.now();
console.log(`Execution time: ${end - start} ms`);

// Performance for brute force 
var start_1 = performance.now();

output = twoSum_brute_force(test_nums,test_target)
console.log(output)

var end_1 = performance.now();
console.log(`Execution time: ${end_1 - start_1} ms`);