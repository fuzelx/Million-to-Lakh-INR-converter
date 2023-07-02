// function convertCurrency() {
//     var dollars = parseFloat(document.getElementById("dollars").value);
//     var conversionRate = 82.10; // Change this value to the current conversion rate

//     if (isNaN(dollars)) {
//       document.getElementById("result").innerHTML = "Please enter a valid number";
//     } else {
//       var inr = dollars * conversionRate;
//       document.getElementById("result").innerHTML = dollars + " USD = " + inr.toFixed(2) + " INR";
//     }
//   }


  function millionConvert(){
    let million = parseFloat(document.getElementById("million").value);

    let mInLakh = 10;
    if(isNaN(million)){
        document.getElementById("result2").innerHTML = "Enter valid value!"
    } else{
        let lakh = million*mInLakh;
        document.getElementById("result2").innerHTML = lakh +" " +"Lakh INR";
    }
  }