// let nbr = 30;

// let demandeUser = prompt("deviner un nombre");

// let nbADeviner = 34;
// let demandeUser = prompt("Demande un chiffre");
// let incrementation = 0;

// while (demandeUser !== nbADeviner) {
//   demandeUser;
//   incrementation++;
//   if (demandeUser < nbADeviner) {
//     alert("trop base");
//     demandeUser;
//     incrementation++;
//   } else if (demandeUser > nbADeviner) {
//     alert("trop haute");
//     demandeUser;
//     incrementation++;
//   } else {
//     alert("Vous avez gagner");
//     incrementation++;

//   }

// }

// while (nbfix != demandeUser) {
//   de;
//   if (demandeUser > nbfix) {
//     alert("Estimation Trop haute");
//   } else if (demandeUser < nbfix) {
//     alert("trop base");
//     de++;
//   }

// }

// } else {
//   alert(finalMessage);
// }

// let nbADeviner = 34;
// let demandeUser = 0;

// while (demandeUser !== nbADeviner) {
//   demandeUser;
//   incrementation++;
// }

// while (demandeUser != nbADeviner) {}

// do {
//   demandeUser = prompt("Demande un chiffre");

//   if (demandeUser < nbADeviner) {
//     alert("trop base");
//   } else if (demandeUser > nbADeviner) {
//     alert("trop haute");
//   } else {
//     alert("Vous avez gagner");
//   }
// } while (true);

// let nbrefix = 34;
// let demandeUser = 0;
// let finalMessage = "Félicitation!";

// do {
//   demandeUser = prompt("Entrez un nombre:");

//   if (demandeUser === null) {
//     break;
//   }

//   demandeUser = parseInt(demandeUser);
//   if (demandeUser === nbrefix) {
//     alert(finalMessage);
//     stop();
//   } else if (demandeUser < nbrefix) {
//     alert("Trop bas. Essayez à nouveau.");
//   } else {
//     alert("Trop haut. Essayez à nouveau.");
//   }0
// } while (true);

let nbrefix = 34;
let demandeUser = 0;
let finalMessage = "Félicitation!";
let vie = 5

do {
  demandeUser = prompt("Entrez un nombre:");

  if (demandeUser === null) {
    break;
  }

  demandeUser = parseInt(demandeUser);
  if (demandeUser === nbrefix) {
    alert(finalMessage);
    break;
  } else if (demandeUser < nbrefix) {
    alert("Trop bas. Essayez à nouveau.");
  } else {
    alert("Trop haut. Essayez à nouveau.");
  }

  
} while (true);
