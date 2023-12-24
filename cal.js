const calcKeys=["0","1","2","3","3","4","5","6","7","8","9", "-","+","*","/"];
//const calcBody = document.getElementsByClassName("calculator-body");
const calcBody=document.querySelector(".calculator-body");
const calScreen=document.querySelector(".calculator-screen");
let screenValue="";
//const screenValue="";
for(const key of calcKeys){
   // calcBody.innerHTML+=`<button class="calc-button">${key}</button>`;}
   calcBody.innerHTML+=`<button onclick="appendValue(this)" class="calc-button">${key}</button>`;}
   function appendValue(button){
    const value=button.innerText;
if(value=="="){
   screenValue=eval(screenValue);
}
else if(value=="c"){
   screenValue=screenValue.substring(0,screenValue.lenght-1);
}
else{
   screenValue+=value;
}
calcScreen.innerText=screenValue;
   }

