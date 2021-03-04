//Java Script Page - Exercise
function validateANDadd(){
    var theNewWord = document.forms["myForm"]["newWord"].value;
    var theNewNumber = document.forms["myForm"]["newNumber"].value;
    if (theNewWord==""){
        alert("Please enter a word to check");
        return false;
    }
    else if ((theNewNumber != 1) && (theNewNumber !=2)){
    alert("Please enter a 1 or 2 for the list.");
    document.forms["myForm"]["newNumber"].value="";
    return false;
    }
    else{
        if (theNewNumber==1){
            var theNewLength = document.forms["myForm"]["newWord"].value.length;
                wordCheck=true;
                for (var i = 0; i < theNewLength/2; i++) {
                  if (theNewWord[i] !== theNewWord[theNewLength - 1 - i]) {
                      wordCheck=false;
                  }
                  alert(wordCheck);
                }
            var tableRef = document.getElementById("myList1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML=theNewWord;}
            else{
                var theNewLength2 = document.forms["myForm"]["newWord"].value.length;
                    wordCheck2=true;
                        var lowRegStr = theNewWord.toLowerCase().replace(theNewLength2, '');
                        var reverseStr = lowRegStr.split('').reverse().join(''); 
                        if (reverseStr == lowRegStr){
                            wordCheck2=true;
                        }
                        else{
                            wordCheck2=false;
                        }
                        alert(wordCheck2);
                        var tableRef = document.getElementById("myList2");
                        (tableRef.insertRow(tableRef.rows.length)).innerHTML=theNewWord;}
                      }       
            //Erase
            document.forms["myForm"]["newWord"].value="";
            document.forms["myForm"]["newNumber"].value="";
            return true;
        }   
        
function clearList1() {
        var tableRef = document.getElementById("myList1");
        tableRef.innerHTML = " ";
    }

function clearList2() {
        var tableRef = document.getElementById("myList2");
        tableRef.innerHTML = " ";
    }

