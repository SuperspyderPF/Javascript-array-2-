/**1389. Create Target Array in the Given Order
Easy

1272

1352

Add to List

Share
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

 

Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
Example 2:

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
Example 3:

Input: nums = [1], index = [0]
Output: [1]
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    let result = []
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        let idx = index[i]
        result.splice(idx, 0, num)
    }
    return result
};

//time and space O(n)

// 1 line 
var createTargetArray = function(nums, index) {
    return nums.reduce((target, num, i) => target.concat(target.splice(index[i], 0, num)), []);
};

///
var createTargetArray = function(nums, index) {
    let result=[]
    for(let number of nums){
        let idx = index.shift();
        result.splice(idx,0,number)
    }
    return result
};

///3
var createTargetArray = function(nums, index) {
    let target=[];
    for(let i=0;i<nums.length; i++){
        target.splice(index[i],0,nums[i])
    }
   return target
};