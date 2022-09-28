/**1662. Check If Two String Arrays are Equivalent
Easy

1026

120

Add to List

Share
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    var w1 = word1.join('')
    var w2 = word2.join('')
    if(w1 === w2){
        return true
    } else {
        return false 
    }
    
};
var arrayStringsAreEqual = function(word1, word2) {
    var w1 = word1.join(''), w2 = word2.join('') 
    return w1 === w2 ? true : false 
    
};

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') === word2.join('')
};
//time and space O(n)