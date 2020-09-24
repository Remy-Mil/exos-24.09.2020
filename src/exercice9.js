import readlineSync from 'readline-sync'

/*Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens 
ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter*/

console.log(
    'Merci de répondre aux questions afin de savoir si vous etes en age de voter.'
)
let userFirstName = readlineSync.question('Prénom: ')
if (!isNaN(userFirstName)) {
    console.log('Les chiffres ne sont pas autorisés')
    process.exit(1)
}

let userName = readlineSync.question('Nom: ')
if (!isNaN(userFirstName)) {
    console.log('Les chiffres ne sont pas autorisés')
    process.exit(1)
}

console.log(`Bonjour ${userFirstName} ${userName}`)

let age = readlineSync.question('Inscrivez votre age:')
if (Number(age) < 18) {
    console.log(
        `Vous avez ${age} ans, vous n'êtes pas majeur, vous ne pouvez pas voter`
    )
    process.exit(1)
}

if (Number(age) >= 18) {
    console.log(
        `${userFirstName} ${userName}, vous êtes majeur, vous pouvez voter`
    )
    process.exit(1)
}
