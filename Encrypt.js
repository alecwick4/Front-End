//Java Script Page - Paragraph
async function getBaconipsum() {
    // first build the API call string by starting with the URL
    var apiString = "https://baconipsum.com/api/";
 
    //next add the parameters to the string using the drop down lists
    var theNewParagraphs = document.getElementById("newParagraphs").value;
    var typeMeat=document.getElementById("meatType").value;
    apiString=apiString + "?type=meat-and-filler&paras="+theNewParagraphs;
    alert(apiString);
    var response = await fetch(apiString);

    //Checks to make sure it is empty
    document.getElementById("myRawData").innerHTML="";
    document.getElementById("myFormattedData").innerHTML="";
    document.getElementById("Encrypt").innerHTML="";

    //Creates JSON Object
    var jsonData = await response.json();

    //Displays raw data
    document.getElementById("myRawData").innerHTML=JSON.stringify(jsonData);

    //Displays formatted data
    for (var para in jsonData){
        document.getElementById("myFormattedData").innerHTML+="<p>"+jsonData[para]+"</p>";
    }

//Encryption Method #1
//Reads through JSON Data
var injson = [];
for (var i in jsonData){
    //Creates needed variables
    var empty = ""; 
    for(var j in jsonData[i]){
        //Gets ascii value 
        var character = jsonData[i][j];
        //Grabs each one
        var newCharacter = character.charCodeAt(0);
        //Selects which values to change
        if(newCharacter >=65 && newCharacter<=90){
        //Fill JSONObject and increases by 3
            character = String.fromCharCode(newCharacter+3);
        }
        else if(newCharacter >=97 && newCharacter<=122){
                character = String.fromCharCode(newCharacter+3); 
        }
    empty += character;
    }//for j
alert(empty)
//Fills in empty variable
injson.push(empty);
}//For i
//Prints
for(var i in injson){
    document.getElementById("Encrypt").innerHTML +="<p>"+injson[i]+"</p>";
}//end for i
return true;
}
