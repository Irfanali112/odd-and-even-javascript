function odd_even(){

         let number=(document.getElementById("inputnum").value);

       


if(number % 2 === 0){


    document.getElementById("result").innerHTML="<h1>Even Number</h1>";



}

else{
    document.getElementById("result").innerHTML="<h1>Odd Number</h1>";




}





}