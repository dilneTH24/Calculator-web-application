function appendToResult(value) {
    document.getElementById("result").value += value;
}

 function calculateResult() {
    var result= document.getElementById("result").value;
    var calculateResult = eval(result);
    document.getElementById("result").value = calculateResult;

    
 }


 function clearResult() {
    document.getElementById("result").value="";
    
 }