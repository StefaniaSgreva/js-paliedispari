"use strict"; 

/*todoPalidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const btnPal = document.querySelector('.btnWord');
const result1 = document.querySelector('.result1'); 

btnPal.addEventListener('click', ()=>{
    let userWord = document.getElementById('palindrome').value;  
    palindrome(userWord);
    // console.log(palindrome(userWord));
    if (palindrome(userWord)){

        result1.innerHTML = 'This word is a palindrome !'; 

    }else{

        result1.innerHTML = 'This word is not a palindrome !';
    }  
});

/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

const btnEO = document.querySelector('.btnNumber');
const inputTagEven = document.getElementById('numberEven');
const inputTagOdd = document.getElementById('numberOdd');
const result2 = document.querySelector('.result2'); 
const container = document.querySelector('.containerAlert');

btnEO.addEventListener('click', function(){
    const validNumbers = [1, 2, 3, 4, 5];
    let value = parseInt(inputTagEven.value) || parseInt(inputTagOdd.value); //Element to be searched
    if(validNumbers.includes(value)){

        function sum(){
            const firstNumber = parseInt(inputTagEven.value) || parseInt(inputTagOdd.value);
            const secondNumber = randomNumber(1, 5);
            return firstNumber + secondNumber;
          }
          console.log(sum());

        if(isEven(sum)){ //!isEven
            result2.innerHTML = sum() + 'even';
        } else {
            result2.innerHTML = sum() + 'odd';
        }

    } else{
        result2.innerHTML = ' ';
        const divAlert = notificationError('Attention: you must enter a number from 1 to 5 !');
        container.prepend(divAlert);
        return;
    }
    const attentionToRemove = document.querySelector('.alert');
    if(attentionToRemove) attentionToRemove.remove(); 
});