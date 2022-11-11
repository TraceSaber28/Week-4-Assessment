const fortunes = require ('./db.json')
let globalId = 6
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getRandomFortune: (req, res) => {
        const fiveFortunes = ['A fresh start will put you on your way.',
            'A friend asks only for your time not your money.',
            'A friend is a present you give yourself.',
            `A gambler not only will lose what he has, but also will lose what he doesn’t have.`,
            'A golden egg of opportunity falls into your lap this month.']

            let randomIndex = Math.floor(Math.random() * fiveFortunes.length);
            let randomFortune = fiveFortunes[randomIndex];
          
            res.status(200).send(randomFortune);
    },

    getAllFortunes: (req, res) => {
        res.status(200).send(fortunes)
    },
    
    deleteFortune: (req, res) => {
        let existingId = req.params.id
        for(let i = 0; i < fortunes[0].length; i++) {
            if(fortunes[0][i].id === existingId) {
                fortunes[0].splice(i, 1)
                res.status(200).send(fortunes)
            }
        }
    },
    addFortune: (req, res) => {
        let {fortune} = req.body
        let newFortune = {
            id: globalId,
            fortune,
        }
        fortunes.push(newFortune)
        res.status(200).send(fortunes)
        globalId++
    },
    updateFortune: (req, res) => {
        let {id} = req.body
        let index = fortunes.findIndex(fortunesId => +fortunesId.id === +id)

        fortunes[index].fortune = req.body.fortune
        res.status(200).send(fortunes)
    }

}