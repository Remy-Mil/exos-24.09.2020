import readlineSync from 'readline-sync'
import chalk from 'chalk'

/*Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne 
de commande. Le programme s'éxecutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après 
chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument du programe 
à son lancement, les messages suivant lui appaitront:

si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert*/

/*let secretNumber = Math.floor(Math.random(secretNumber * 8))*/

const guess = () => {
    let secretNumber = false // faux par defaut pour permettre a la boucle de commencer, sinon le jeu ne démarre pas
    while (!secretNumber) {
        // la boucle tourne jusqu'a ce que la trouve le secretNumber
        let goodNumber = readlineSync.question(` Fait un choix entre 0 et 10: `)
        let secretNumber = Math.floor(Math.random() * 10) + 1 // trouve un chiffre random jusqu'a 10
        if (goodNumber < secretNumber) {
            console.log(chalk.red(`Trop petit`))
        } else if (goodNumber > secretNumber) {
            console.log(chalk.red(`Trop grand`))
        } else {
            secretNumber == true
            console.log(chalk.green(`Bravo`))
            break //stop la boucle quand la réponse est trouvée, sinon boucle infinie
        }
    }
}
guess()

if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Il faut entrer des chiffres`))
    process.exit(1)
}

if (goodNumber <= 10) {
    console.log(chalk.red(`Il faut entrer des chiffres entre 0 et 10`))
    process.exit(1)
}

if (goodNumber < 0) {
    console.log(chalk.red(`Il faut entrer des chiffres entre 0 et 10`))
    process.exit(1)
}
