"use strict";
import { symbols } from "./symbols.js";

//global variables
const data = symbols;
let amountInput = document.getElementById('amount');
const convertFrom = document.querySelector('.currency-from');
const convertTo = document.querySelector('.currency-to');
const switchConversion = document.getElementById('switch');
const convertedAmount = document.querySelector('.result');
const convertButton = document.querySelector('.convert');



//function to format inputted amount
amountInput.addEventListener('keyup', function(evt){
    let n = parseInt(this.value.replace(/\D/g,''),10);
    amountInput.value = n.toLocaleString();
}, false);

document.addEventListener('DOMContentLoaded', () => {

    //function to create dropdown currency items
    function currencySelectItems() {
        for (let key in data) {
            if(data.hasOwnProperty(key)){
                // console.log(`${key} : ${data[key].name}`);
                let option = document.createElement('option');
                option.setAttribute('value', key);
                option.appendChild(document.createTextNode(`${key} : ${data[key].name}`));
                convertFrom.appendChild(option);
                convertTo.appendChild(option.cloneNode(true));
            }
        }
    }

    //swap dropdown values on click 'switch' icon
    switchConversion.addEventListener('click', function() {
        let temp = convertFrom.value;
        convertFrom.value = convertTo.value;
        convertTo.value =  temp;
    });

    currencySelectItems();
});

// let myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// let requestOptions = {
//     method: "get",
//     headers: myHeaders,
//     redirect: "follow",
// };

// //Function to collect currency symbols
// async function currencySymbols() {
//     try {
//         const response = await fetch("https://v1.nocodeapi.com/davi3/cx//symbols", requestOptions);
//         const symbols = await response.json();
//         console.log(symbols);
//     } catch (error) {
//         console.log(error);
//     }
// }
// // currencySymbols();