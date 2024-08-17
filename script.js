//Tarification des billets : Écrivez un programme qui invite l'utilisateur à saisir son âge, puis détermine le prix d'un billet de cinéma en fonction des critères suivants :

//Enfants (âge <= 12 ans) : 10 $
//Adolescents (13-17 ans) : 15 $
//Adultes (âge >= 18) : 20 $
// Fonction pour déterminer le prix du billet
function determinerPrixBillet(age) {
    if (age <= 12) {
        return 10; // Enfants
    } else if (age >= 13 && age <= 17) {
        return 15; // Adolescents
    } else if (age >= 18) {
        return 20; // Adultes
    } else {
        return "Âge invalide"; // Cas d'erreur
    }
}

// Fonction pour demander l'âge et afficher le prix
function afficherPrixBillet() {
    // Demande de l'âge à l'utilisateur
    let age = parseInt(prompt("Veuillez entrer votre âge :"));
    
    // Vérification de la validité de l'âge
    if (isNaN(age) || age < 0) {
        console.log("Veuillez entrer un âge valide.");
    } else {
        // Détermination du prix du billet
        let prix = determinerPrixBillet(age);
        console.log("Le prix de votre billet est de " + prix + " $.");
    }
}

// Appel de la fonction pour afficher le prix du billet
afficherPrixBillet();
// Fonction pour conseiller des vêtements en fonction de la météo
function conseillerVetements(temperature, pleutIl) {
    if (pleutIl) {
        if (temperature < 10) {
            return "Il fait froid et il pleut. Portez un manteau chaud, une écharpe, et n'oubliez pas votre parapluie.";
        } else if (temperature >= 10 && temperature < 20) {
            return "Il fait frais et il pleut. Portez un manteau léger, un pull, et prenez un parapluie.";
        } else {
            return "Il fait chaud mais il pleut. Portez des vêtements légers et un imperméable ou prenez un parapluie.";
        }
    } else {
        if (temperature < 10) {
            return "Il fait froid. Portez un manteau chaud, une écharpe, et des gants.";
        } else if (temperature >= 10 && temperature < 20) {
            return "Il fait frais. Portez un pull ou une veste légère.";
        } else {
            return "Il fait chaud. Portez des vêtements légers et confortables.";
        }
    }
}

// Fonction pour demander les informations et afficher les conseils
function donnerConseils() {
    // Demande de la température actuelle
    let temperature = parseFloat(prompt("Quelle est la température actuelle (en °C) ?"));

    // Vérification de la validité de la température
    if (isNaN(temperature)) {
        console.log("Veuillez entrer une température valide.");
        return;
    }

    // Demande si l'utilisateur indique s'il pleut ou non
    let pleutIl = confirm("Est-ce qu'il pleut actuellement ? Cliquez sur 'OK' pour Oui, ou 'Annuler' pour Non.");

    // Appel de la fonction de conseil en fonction des informations
    let conseil = conseillerVetements(temperature, pleutIl);

    // Affichage des conseils
    console.log(conseil);
}

// Appel de la fonction pour donner les conseils
donnerConseils();


//Suite de Fibonacci : implémenter une fonction récursive pour générer le n-ième nombre de Fibonacci. La suite de Fibonacci commence par 0 et 1, et chaque nombre suivant est la somme des deux nombres précédents (0, 1, 1, 2, 3, 5, 8, ...).
// Fonction récursive pour calculer le n-ième nombre de Fibonacci
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Exemple d'utilisation
let n = 10; // par exemple, pour obtenir le 10e nombre de Fibonacci
console.log(`Le ${n}e nombre de Fibonacci est : ${fibonacci(n)}`);

// Fonction récursive pour calculer la puissance d'un nombre
function puissance(base, exponent) {
    // Cas de base : toute base élevée à la puissance 0 est 1
    if (exponent === 0) {
        return 1;
    }
    // Si l'exposant est positif
    else if (exponent > 0) {
        return base * puissance(base, exponent - 1);
    }
    // Si l'exposant est négatif
    else {
        return 1 / puissance(base, -exponent);
    }
}

// Exemple d'utilisation
let base = 2;
let exponent = 3;
console.log(`${base} élevé à la puissance ${exponent} est : ${puissance(base, exponent)}`);


