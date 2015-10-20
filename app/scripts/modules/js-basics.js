(function(global){
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        // i will be an integer.
        return(i%2===0);

        // Return true if it's even, and false if it isn't.

    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
var re = /(?:\.([^.]+))?$/;


var ext = re.exec(str)[1];
if(ext===undefined)
  return(false);
else
return(ext);
    };

    JS_BASICS.longestString = function(arr) {
      var strlg;
      var regex = new RegExp(/([^A-Za-z0-9\-])/);
      for(var i= 0; i < arr.length; i++)
{
  if (regex.test (arr[i])) {

          return false;
  }else {
        if (arr[i].length>arr[i-1].length){
          strlg=arr[i];
        }
}
        return strlg
        }
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
