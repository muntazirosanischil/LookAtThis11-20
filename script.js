//write first method
function firstLast6(arr) {
    return arr[0] == 6 || arr[arr.length - 1] == 6;
}

//write second method
function has23(arr){
    /*Given an array of length 2, return true if it contains a 2 or a 3.

    has23([2, 5]) → true
    has23([4, 3]) → true
    has23([4, 5]) → false*/
    return arr[0] == 2 || arr[1] == 2 || arr[0] == 3 || arr[1] == 3;
}

function fix23(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }

    }
    return arr;
}

function countYZ(arr){
    var seven = 0;
    if(arr[arr.length - 1] == "y" || arr[arr.length - 1] == "z" || arr[arr.length - 1] == "Z" || arr[arr.length - 1] == "Y") {
        seven++;
    }
    for(var i = 0; i < arr.length; i++) {
        if (arr[i+1] == " " && (arr[i] == "y" || arr[i] == "Y" || arr[i] == "z" || arr[i] == "Z")){
            seven++;
        }
    }
    return seven;
}

function endOther(x,y){
    var p = x.toLowerCase();
    var q = y.toLowerCase();

    //[3, 6)

    if(p.substring(p.length - q.length, p.length) == q) {
        return true;
    }else if(q.substring(q.length - p.length, q.length) == p){
        return true;
    }else{
        return false;
    }
}
// a, b, *, c, d
function starOut(str){
    var donkey = "";
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+1) != "*" && str.substring(i-1, i) != "*" && str.substring(i+1, i+2) != "*"){
            donkey += str.substring(i, i+1);
        }
    }
    return donkey;
}

function getSandwich(str){
    var start = str.indexOf("bread") + 5;
    var end = str.lastIndexOf("bread");
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+5) == "bread"){
            count++;
        }
    }
    if(count >= 2){
        return str.substring(start, end);
    }else{
        return "";
    }
    // str.indexOf("bread") --> 1st instance of "bread"
}

function canBalance (nums) {
    var one = 0;
    var two = 0;

    for (var i = 0; i < nums.length; i++){
        two += nums[i]; //adding all nums together
    }

    for (var i = 0; i <= nums.length - 2; i++){
        one += nums[i];
        two -= nums[i];

        if (one == two){
            return true;
        }
    }
    return false;
}

function countClumps (nums){
    var gorilla = -1;
    var clumps = 0;

    for (var i = 0; i < nums.length; i++){
        if (nums[i] == nums[i+1] && nums[i] != gorilla){
            clumps += 1;
            gorilla = nums[i];
        } else {
            if (nums[i] != gorilla){
                gorilla = -1
            }
        };
    }
    return clumps;
}

function evenlySpaced (a, b, c) {
    const maximum = Math.max(a, b, c);
    const minimum = Math.min(a, b, c);
    const middle = a + b + c - max - min;

    return maximum - middle == middle - minimum;
}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23(true, false);
    document.getElementById("output").innerHTML += countYZ(true, false);
    document.getElementById("output").innerHTML += endOther(true, false);
    document.getElementById("output").innerHTML += starOut(true, false);
    document.getElementById("output").innerHTML += getSandwich(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
