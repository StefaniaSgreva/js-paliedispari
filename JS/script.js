"use strict"; 
/*Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const btnPal = document.querySelector('.btnWord');
const result = document.querySelector('h4'); 

btnPal.addEventListener('click', ()=>{
    let userWord = document.getElementById('palindrome').value;  
    palindrome(userWord);
    // console.log(palindrome(userWord));
    if (palindrome(userWord)){

        result.innerHTML = 'This word is a palindrome !'; 

    }else{

        result.innerHTML = 'This word is not a palindrome !';
    }  
});



/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/