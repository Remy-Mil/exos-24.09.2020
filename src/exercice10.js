import readlineSync from 'readline-sync'
/*
Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme 
précedent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui 
correspondera à l'age de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21

Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18

Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom 
et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter*/

console.log(
    'Merci de répondre aux questions afin de savoir si vous etes en age de voter.'
)
const isAdult = () => {
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
    if (Number(age) < byCountry) {
        console.log(
            `Vous avez ${age} ans, vous n'êtes pas majeur, vous ne pouvez pas voter`
        )
        process.exit(1)
    }

    if (Number(age) >= byCountry) {
        console.log(
            `${userFirstName} ${userName}, vous êtes majeur, vous pouvez voter`
        )
        process.exit(1)
    }
}

const byCountry = process.argv[2]

isAdult()
