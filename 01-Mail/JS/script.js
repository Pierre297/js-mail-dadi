// Chiedi all’utente la sua email,
const userMail = prompt("Qual è la tua Email?");
const guessList = document.getElementById("guess-list");

// whitelist
const whiteList = ["pincopallo@gmail.com", "tpatsyg@mobii.site", "gatmanry@caraparcal.com", "datanu.gh@cuenmex.com", "dyoussaf.mokafih4@hearkn.com", "ztomino.belloukl@hacktoy.com"]

// controlla che sia nella lista
for( let i = 0; i <= whiteList.length; i++){
    if (whiteList[i] === userMail){

        guessList.innerHTML = `${userMail} è nella lista degli invitati.`;

    }else {

        guessList.innerHTML = `${userMail} non è nella lista degli invitati.`;


    }
};

 


