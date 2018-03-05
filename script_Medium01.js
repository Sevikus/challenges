// Chack if number is prime
/*
function primeTime(num) {
    if (num < 2) { return false; }
    for (var i = 2; i < num; i++) {
	    if (num % i === 0) { console.log(false); return false; }
        else { console.log(true); return true; }
    }
}
primeTime(23);
*/
// Find position of prime number
/*
function primeTime(num) {
    var arr = [2];
    for (var i = 2; i <= num; i++) {
        for (var j = 2; j < i; j++) {
            //console.log(i);
            //console.log(j);
            if (i % j === 0) { console.log(false); break; }
            //console.log(j);
            //console.log(i-1);
            if (j === i - 1) { 
                arr.push(i);
                console.log(arr);
            }    
        }
    }
    console.log(arr.length);
}
primeTime(23);
*/
// find prime nuber by position
/*
function primeTime(num) {
    if (num < 1) { return 'invalid'; }
    if (num === 1) { return 2; }
    var n = 3;
    var count = 1;
    while (count != num) { 
        for (var i = 2; i < n; i++) {
            if (i === n - 1) { 
                count++;
                n++;
                break;                
            }            
            if (n % i === 0) { 
                n++; 
                break; 
            }
        }
    }  
    console.log(n-1);
    return n-1;
}
primeTime(2);
-------------------------------------------
*/

// "wwwggopp" would return 3w2g1o2p
/*
function runLength(str) {
    var arr = str.split("");
    var arrSort = [];
    var count = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
        	count++;
        } else {
            arrSort.push(count + arr[i]);
            count = 1;
        }
    }
    arrSort = arrSort.join("");
    console.log(arrSort);
}
runLength('asssyrre');

function runLength(str) {
    var i = 0;
    var rle ="";
    
    while  (i < str.length) {
        var c = str[i];
        var j = i + 1;
        var compresed = [1, c];

        while  (j < str.length) {
    	    if (str[j] === c) { compresed[0] += 1;}
    	    else { break; }
    	    j++
        }
        rle += compresed.join("");
        i = j; 
    }
console.log(rle);
return rle;
}
runLength('abbbutta');
----------------------------------------------------
*/
// PALIDROME
/*
function palidromeTwo(str) {
    var arr1, arr2 = []; 
    arr1 = str.match(/[a-z]/ig);
    arr2 = str.match(/[a-z]/ig);
    arr1.reverse();
    var str1 = arr1.join("").toLowerCase();
    var str2 = arr2.join("").toLowerCase();
    if (str1 === str2) {console.log(true); return true;}
    else {console.log(false); return false;}
}
 palidromeTwo('Ap war at Tarawa!')

function palidromeTwo(str) {
    var arr = str.match(/[a-z0-9]/gi);
    var joined = arr.join("").toLowerCase();
    return joined === joined.split("").reverse().join(""); 
}
palidromeTwo('Ap war at Tarawa!')
------------------------------------------------------
*/
// String Scramble
/* 
function stringScramble(str1, str2) {
    for (var i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            console.log(false);
            return false;
        }
    }
    console.log(true); 
    return true;
}
stringScramble('bodgfaba', 'bobba');
-------------------------------------------------------
*/















































