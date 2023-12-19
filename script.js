//ESERCIZIO 1 : Crea una funzione che controlli due numeri interi. Ritorna true se uno dei due o se la somma dei due è 50.
const checkNumber = function (a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else {
    return "not true";
  }
};

console.log(checkNumber(4, 47));

/* ESERCIZIO 2 : Crea una funzione che elimini un carattere ad una specifica posizione di una stringa. Passa la posizione e la
 stringa come parametri e ritorna la stringa modificata  */
const checkAndEraseIndex = function (index, sentence) {
    let sentenceInArr = sentence.split(""); //il metodo trasforma la stringa in un array in cui ogni elemento corrisponde ad un carattere della stringa
    sentenceInArr.splice(index, 1); //splice trova l'elemento in posizione index ed elimina il numero di elementi indicato dal secondo parametro
    return sentenceInArr.join("") //join trasforma l'array di nuovo in stringa unendo tra loro i caratteri
};

console.log(checkAndEraseIndex(6, "AAA EEA"));
console.log(checkAndEraseIndex(4, "Bibidi bobidi bu"))

/* ESERCIZIO 3 : Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna true se 
rispecchiano queste condizioni altrimenti ritorna false */
const checkRangeNumber = function (x) {
  if (((x > 40) && (x < 60)) || ((x > 70) && (x < 100))) {
    return true
  } else {
    return false
  }
};

console.log(checkRangeNumber(55))
console.log(checkRangeNumber(5))


/* ESERCIZIO 4: Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inzia per "Los" o "New" 
altrimenti ritorni "false*/
const checkName = function(name) {
    let start = name.substr(0, 3).toLowerCase()
    if((start === "new") || (start === "los")) {
        return name
    } else {
        return false
    }
}

console.log(checkName("New York"))
console.log(checkName("Nos Angeles"))

/* ESERCIZIO 5 : Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato  
 come parametro */
 const calculateArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + sum
    }
    return sum
 }

 console.log(calculateArray([1, 6, 90]))


