// Return number of minutes between two times.
/*
function countingMinutes(str) {

    var sep = str.split("-");

    var set0 = sep[0].split(":");
    var set00 = parseInt(set0[0]);
    var set01 = parseInt(set0[1]);

    var set1 = sep[1].split(":");
    var set10 = parseInt(set1[0]);
    var set11 = parseInt(set1[1]);

    var apm = str.match(/am|pm/g);
    if (apm[0] === 'pm') { set00 += 12; }
    if (apm[1] === 'pm') { set10 += 12; }
  
    var time0 = set00 * 60 + set01;
    var time1 = set10 * 60 + set11;
  
    if (time1 > time0) {console.log(time1 - time0);}  
    else {console.log(1440 - time0 + time1);}

}
countingMinutes('12:30am-12:40am');
---------------------------------------------------
*/

//  Insert dashes ('-') between each two odd numbers, nedjeljivi sa 2
/*
function dashInsert(str) {
    var arr = str.split("");
    console.log(arr);

    for(var i = 0; i < arr.length-1; i++) {
        if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
            arr[i] += '-';
        }
    }
    console.log(arr.join(''));
}
dashInsert('31879897');
-----------------------------------------------------
*/

// Swop the case of each character
/*
function swapCase(str) {
    var arr = str.split("");
        for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else if (arr[i] === arr[i].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    console.log(arr.join(""));
}
swapCase('AkIop oIuytR mJAuUu');
------------------------------------------------------
*/

// Search for all the numbers in the string, add them together
/*
function numberAddition(str) {
    var arr = str.match(/[0-9]+/g) || [];
    console.log(arr);
    
    function getSum(x, y) {
    return parseInt(x) + parseInt(y);
    }
    var sum = arr.reduce(getSum, 0) 
    console.log(sum);
}
numberAddition("dfr45gf t2g hf11 l4lo4");
----------------------------------------------------------
*/

//  If number is power of two (2*2*2...)
/*
function powerOfTwo(num) {
// return Math.log2(num) === parseInt(Math.log2(num));
var x = 0;
var y = 1;
while (x < num) {
    x = Math.pow(2, y);
    y++;
}
console.log(num === x) ? true : false;
}
powerOfTwo(8);


function powerOfTwo(num) {
  if (num >= 2) {
    while (num >= 2 || num % 2 === 0) {
        num = num / 2;
    }
    if (num === 1 && num % 2 !== 0) {console.log(true);}
    if (num !== 1 && num % 2 !== 0) {console.log(false);}
  }
  else {console.log(false);}
}
powerOfTwo(2);
------------------------------------------------------------
*/
// Keep adding numbers until only one left
/*
function additive(num) {
    var arr = num.toString().split("");
    var arrSum = [];
    var count = 0;  
    console.log(arr);
        while (arr.length > 1) {
        
            for (var i = 0; i < arr.length; i+=2) {
                if (arr[i+1]) {
                    arrSum.push(parseInt(arr[i]) + parseInt(arr[i+1])); 
                } else {
                    arrSum.push(parseInt(arr[i])); 
                }
            }
        count++;
        arr = arrSum.join("").split("");
        arrSum = [];
        console.log(arr);
    }
    console.log(count);    
}
additive(1234567);
-------------------------------------------------------------------------
*/
// Keep multiply numbers until only one left
/*
function multiplicate(num) {
    var arr = num.toString().split("");
    var arrSum = [];
    var count = 0;  
    console.log(arr);
        while (arr.length > 1) {
        
            for (var i = 0; i < arr.length; i+=2) {
                if (arr[i+1]) {
                    arrSum.push(parseInt(arr[i]) * parseInt(arr[i+1])); 
                } else {
                    arrSum.push(parseInt(arr[i])); 
                }
            }
        count++;
        arr = arrSum.join("").split("");
        arrSum = [];
        console.log(arr);
    }
    console.log(count);    
}
multiplicate(1234567);
-------------------------------------------------------------------------
*/
// Overlaping arr0-arr1 with arr2-arr3, number of element defined with arr4
/*
function overlap(arr) {
    console.log(arr);
var count = 0;
    for (var i = arr[0]; i < arr[1]; i++) {
        if (i >= arr[2] && i <= arr[3]) {
            count++;
        }
    }
console.log(count >= arr[4] ? true : false);
}
overlap([1, 8, 3, 6, 5]);
---------------------------------------------
*/
// Check if each element in the array is greater than the sum of all previous 
/*
function Superincreasing(arr) {
    var arr = arr.split(' ');
    var arr = arr.map(function(arr) {
        return parseInt(arr);
    });
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if (sum >= arr[i]) {
            console.log(false);
            return false;
        } else { sum += arr[i];}
    } 
    console.log(true); 
}
Superincreasing('1 3 8 55 244 666');
--------------------------------------------------
*/






















