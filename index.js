let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];//91 items

let charactersWnumbers= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] //62 items

let charactersWsymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"] //81

let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] //52

let generate = document.getElementById("generateBtn")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let passlength= document.getElementById("passLength")
let copyBtnOne = document.getElementById("copyBtnOne")
let copyBtnTwo = document.getElementById("copyBtnTwo")
let numbRadio = document.getElementsByName("numbRadio")
let symbRadio = document.getElementsByName("symbRadio")

let numbChoice= ""
let symbChoice= ""
let numbLength = 62
let symbLength = 81
let characterLength = 91
let lettersLength = 52


function generatePasswords(){
    //Erases previous passwords when clicked again
    passOne.textContent = ""
    passTwo.textContent = ""

//Checks whether user wants numbers and symbols, on or off
    for (let i = 0; i < numbRadio.length; i++) {
        if (numbRadio[i].checked) {
         numbChoice = numbRadio[i].value
        }
        if (symbRadio[i].checked) {
            symbChoice = symbRadio[i].value
           }
      }
    //Modifies the characters and length depending on whether users want numbers and symbols on or off
      if(numbChoice === "on" && symbChoice ==="off"){
        characters = charactersWnumbers
        characterLength = numbLength
      }
      else if(numbChoice === "off" && symbChoice === "on"){
        characters = charactersWsymbols
        characterLength = symbLength
      }
      else if(numbChoice === "off" && symbChoice === "off"){
        characters = letters
        characterLength = lettersLength
      }
      else{
        characters = characters
        characterLength = characterLength
      }

      //secret code for my girlfriend
    if(passlength.value == 26){
        passOne.textContent = "I love you my beautiful baby! 💖"
        passTwo.textContent = "Super proud of you my engineer! 👷‍♀️"
    } 
    //checks the password length user chooses is within the range 8-15
    else if(passlength.value >= 8 && passlength.value <=15 ){
        //for loops create the random passwords with their length 
        for(let i = 0; i <passlength.value ; i++){
            let index = Math.floor(Math.random()*characterLength)
            let passOneList = []            
            passOneList.push(characters[index])
            passOne.textContent += passOneList
    
        }
    
        for(let i = 0; i <passlength.value ; i++){
            let index = Math.floor(Math.random()*characterLength)
            let passTwoList = []
                passTwoList.push(characters[index])
                passTwo.textContent += passTwoList
        }
    }
    else{
        alert("Password length must be minimum 8 and max 15 characters")
        return
    }
    

}

// allows for users to copy the password with one click directly to their keyboard
function copyBtnOneFunc(){
    if (passOne.textContent.length != 0){
        navigator.clipboard.writeText(passOne.textContent)
        alert("Copied the text: " + passOne.textContent);
    }
    else{
        alert("There is no password to copy")
    }
}
function copyBtnTwoFunc(){
    if (passTwo.textContent.length != 0){
        navigator.clipboard.writeText(passTwo.textContent)
        alert("Copied the text:  " + passTwo.textContent);
    }
    else{
        alert("There is no password to copy")
    }
}









