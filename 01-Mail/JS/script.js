// Chiedi all’utente la sua email,
const userMail = prompt("Qual è la tua Email?");
const guessList = document.getElementById("guess-list");

// whitelist
const whiteList = ["pincopallo@gmail.com", "tpatsyg@mobii.site", "gatmanry@caraparcal.com", "datanu.gh@cuenmex.com", "dyoussaf.mokafih4@hearkn.com", "ztomino.belloukl@hacktoy.com"];

let trovata = false;

// controlla che sia nella lista
for( let i = 0; i <= whiteList.length; i++){
    if (whiteList[i] === userMail){
        trovata = true;
    }

};

if(trovata == true ){
    guessList.innerHTML = "Benvenuto! La tua mail è presente.";
}else {
    guessList.innerHTML = "Spiacenti, la tua mail non è presente nella lista.";
};

 


