const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const currentPlayer = playerOne




var api_url = 'https://opentdb.com/api.php?amount=5&type=multiple'
var config = {
    parameters: {
        category: "Entertainment",
        questions: null,
        answers: "correct_answer"
    }
};
axios.get(api_url, config)
.then(function (response) {
    config.parameters.questions = response.data.results
    console.log(config.parameters)
    generateRandQuestion();
})


/*function generateRandQuestion(questions) {
    const randIndex = Math.floor(Math.random() * config.parameters.questions.length + 1)
    questions = config.parameters.questions
    return (questions[randIndex])
}*/


class Player {
    constructor (type) {
        this.type = type
        generateRandQuestion(questions) {
            const randIndex = Math.floor(Math.random() * config.parameters.questions.length + 1)
            questions = config.parameters.questions
            return (questions[randIndex])
        }
    }
}

var playerQuestion = new Player('round')
playerQuestion.generateRandQuestion()
