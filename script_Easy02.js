// return true if the characters a and b are separated by 3 places... 
/*
function abCheck(str) {
var srch = str.search(/a...b/gi);
if (srch >= 0) {
    return true;
} else { return false; }
console.log(srch);
}
abCheck('poljem se siri audeba');

function abCheck(str) {
    var str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i + 4] === 'b') { 
            console.log(true);
            return true; 
        } if (str[i] === 'b' && str[i + 4] === 'a') { 
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}
abCheck('jdhybfhvadf');
--------------------------------------------------------
*/

// Return the number of vowels the string
/*
function vowelCount(str) {
    var vowel = str.match(/a|e|i|o|u/gi);
    if (vowel === null) {return 0} 
        else {return vowel.length;}
}

function vowelCount(str) {
    var str = str.toLowerCase();
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowel.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    console.log(count);
    return count;
}
vowelCount('All cows eat grass and moo');
-----------------------------------------
*/

// Word Count
/*
function wordCount(str) {
    // return str.split(" "),length;
    var arr = str.split(" ");
    console.log(arr.length);
    return arr.length;
}
wordCount('');
------------------------------------------
*/

// Equal number of x's and o's
/*
function ExOh(str) {
    var x = str.split("x").join("");
    var o = str.split("o").join("");
    if (x.length === o.length) {console.log(true);}
    else {console.log(false);}
}
ExOh('oxoxoxox')
-------------------------------------------
*/

// PALINDROME, Return true if string is same forward as backward.
/*
function palindrome(str) {
    var str1 = str.split(" ").join("").toLowerCase(); // get rid of white spaces
    var str2 = str1.split("").reverse().join(""); 
    if (str1 === str2) {console.log(true);}
    else {console.log(false);}
}
palindrome('never odd or even');
------------------------------------------
*/

// Arithmetic, Geometric
/*
function arithGeo(arr) {
    var art = arr[1] - arr[0];
    var gmt = arr[1] / arr[0];
    var lng = arr.length;
    var count1 = 0;
    var count2 = 0;
    for(var i = 2; i < lng; i++) {
        if(arr[i] - arr[i-1] === art) { 
            count1 += 1;
            if (count1 === lng - 2) {console.log('Arithmetic');}
        }    
        else if (arr[i] / arr[i-1] === gmt) {
            count2 += 1;
            if (count2 === lng - 2) {console.log('Geometric');}
        }
    } 
    console.log(-1);
}                                   
arithGeo([1,2,3,4,5,10,20]);
--------------------------------------------------
*/

// Return the second lowest and second greatest numbers
/*
function secondGreatLow(arr) {
    var unique = arr.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    });
    var sorted = unique.sort(function(a, b) {
        return a - b;
    })
    if (sorted.length < 2) { 
        console.log(sorted[0] + " " + sorted[0]); 
    } else {
        console.log(sorted[1] + " " + sorted[sorted.length - 2]);
    }
}
    secondGreatLow([17, 5, 5, 13, 17, 9, 12, 4, 4, 4, 4]);
------------------------------------------------------------
*/

// Eliminate Duplicates
/*
function secondGreatLow(arr) { 
var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });
console.log(unique);
}
secondGreatLow([17, 5, 5, 13, 17, 9, 12, 4, 4, 4, 4]);

// isto kao gore, samo ce prvi koji nade upisati, 
// ostale nece jer im vrijednost 'i' nece biti ista.

for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]);
    }
}


function eliminateDuplicates(arr) {
  var i;
  var len=arr.length;
  var out = [];
  var obj={};

  for (i=0;i<len;i++) {
    obj[arr[i]]=5;
  }
  console.log(obj);

  for (i in obj) {
    out.push(i);
  }
  console.log(out);
  return out;
}
eliminateDuplicates([17, 5, 5, 13, 17, 9, 12, 4, 4, 4, 4]);
-----------------------------------------------------------
*/

// Divide, and return the result as a string with properly formatted commas
/*
function divisionStringified(num1, num2) {
    var num = Math.round(num1 / num2);
    num = num.toString().split("");
    
    var count = 0;
    if (num.length > 3) {
        for(var i = num.length - 1; i >= 0; i--) {
            count++;
            if (count === 3) { 
                num[i] = ',' + num[i];
                count = 0;
            }
        }
    }
    
    //if (num.length > 3 && num.length < 7) {
    //    num.splice(-3, 0, ",");
    //} else if (num.length > 6) {
    //    num.splice(-6, 0, ",");
    //    num.splice(-3, 0, ",");
    //}
    
    num = num.join("");
    console.log(num);
}
divisionStringified(998989, 4);
*/

