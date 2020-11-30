

var arr = [];
var even = [];
var odd  = [];

function addRoll(){

         let number=parseInt((document.getElementById("inputnum").value));
        arr.push(number);
console.log("all numbers==>",arr);
        document.getElementById("result").innerHTML=arr;
}

function arrange(){

    for (let i = 0 ; i<arr.length ; i++){
 
        if (arr[i] % 2 === 0)
        {
            even.push(arr[i])
        }
        else {
                    odd.push(arr[i]);
        }
    }
    // console.log("even values ===>",even);
    // console.log("odd values ===>",odd);
       document.getElementById("even").innerHTML=even;
       document.getElementById("odd").innerHTML=odd;


}