// REVERSE STRING
/*
function firstReverse(str) {
var string = "";
for (var i = str.length - 1; i >= 0; i--) {
    string += str.charAt(i); 
}
console.log(string);
return string;

//var arr, arrRev = []; 
//var string = "";
//arr = str.split("");
//for (var i = arr.length - 1; i >= 0; i--) {
//arrRev.push(arr[i]);
//}
//string = arrRev.join('');
//return string;
}
firstReverse('abc def gfi');
-------------------------------------------------
*/

// 4 RETURN (4*3*2*1)
/*
function firstFactorial(num) { 
    var score = 1;
    for (var i = 1; i <= num; i++) { 
    score = score * i;
    }
    console.log(score);
    return score;
}    
firstFactorial(6);
---------------------------------------------------
*/

// LARGEST WORD IN A STRING, IGNORE PUNCTUATION
/*
function longestWord(sen) {
    var arr, longest;
    arr = sen.match(/[a-z0-9]+/gi); // return array of strings without punctuations
    
    longest = arr.sort(function(a, b) {return b.length - a.length;}); // sort longest
    console.log(longest[0])
    return longest[0];
}    
longestWord('hgfgs764 ki8@##@uj kopitarijadaPPP');
----------------------------------------------------
*/

//  Replace every letter in the string with the letter following it in the alphabet
//  and capitalize every vowel in this new string
/*
function letterChanges(str) {
    var chng = str.replace(/[a-z]/gi, function(ltr) {
        if (ltr === 'z' || ltr === 'Z') { return 'a'}
        else { return String.fromCharCode(ltr.charCodeAt() + 1);}    
//return (ltr === 'z' || ltr === 'Z') ? 'a' : String.fromCharCode(ltr.charCodeAt() + 1) 
    });
    console.log(chng);
    var upper = chng.replace(/a|e|i|o|u/g, function(ltr) {
        return ltr.toUpperCase();
    });
    console.log(upper);
}
letterChanges('abcdefghij123oprz');
-------------------------------------------------------
*/

// CAPITALIZE FIRST LETTER EACH WORD
/*
function letterCapitalize(str) {
    var upper = str.replace(/\b[a-z]/g, function(str) {
        return str.toUpperCase();
    });
console.log(upper);
}
letterCapitalize('ako budem dva postacu prekosutra');
*/
/*
function letterCapitalize(str){
    var words = str.split(" ");
    console.log(words);
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
        console.log(words[i]);
    }
}
letterCapitalize('ako budem dva postacu prekosutra');
-----------------------------------------------------------
*/

// For the string to be true each letter must be surrounded by a + symbol...
/*
function simpleSimbols(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i) !== null) {
            if (str[i-1] !== '+' || str[i+1] !== '+') {
                console.log('false');
                return false;
            } 
        }
    }
    console.log('true');
    return true;
}
simpleSimbols('+f+h+G+d+s+e+');
----------------------------------------------------------------
*/

// Compare 2 numbers
/*
function checkNums(num1,num2) { 
// return (num2 > num1) ? true : (num1 > num2) ? false : '-1';
    if (num2 > num1) {
        console.log(true);
        return true;
    } else if (num1 > num2) {
        console.log(false);
        return false;
    } else {
        console.log(-1);
        return '-1';
    }
}
checkNums(5, 6);
-------------------------------------------------------------------
*/

// Return the number of hours and minutes separated with colon
/*
function timeConvert(num) {
    var hour, rest, time;
    hour = Math.floor(num / 60);
    rest = num % 60;
    (rest < 10) ? time = hour + ':0' + rest : time = hour + ':' + rest; 
    console.log(time);
}
timeConvert(60);
-------------------------------------------------------------------
*/

// Return the string with the letters in alphabetical order,  
// numbers and punctuation symbols will not be included in the string. 
/*
function alphaSoup(str) {
    var arr = str.match(/[a-z]/gi).sort().join('');
    console.log(arr);
}
alphaSoup('hdyeb.,cns>jk!@ih$%ui');
-----------------------------------------------------
*/