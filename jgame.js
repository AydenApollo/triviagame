class Game {
    constructor() {
        this.questions = [];
    }
    async fetchQuestions() {
        let response = await axios.get('https://opentdb.com/api.php?amount=4&type=multiple');
        console.log(response.data);
        this.questions = response.data.results;
    }

    useData() {
        document.querySelector('#category').innerHTML = `Category: ${this.questions[0].category}`;
        document.querySelector('#difficulty').innerHTML = `Difficulty: ${this.questions[0].difficulty}`;
        return;
        document.querySelector('#question').innerHTML = `Question: ${data.results[0].question}`
        document.querySelector('#answer1').innerHTML = `Option One: ${data.results[0].correct_answer}`
        document.querySelector('#answer2').innerHTML = `Option Two: ${data.results[0].incorrect_answers[0]}`
        document.querySelector('#answer3').innerHTML = `Option Three: ${data.results[0].incorrect_answers[1]}`
        document.querySelector('#answer4').innerHTML = `Option Four: ${data.results[0].incorrect_answers[2]}`
    }
}



function useApiData(data) {
    document.querySelector('#category').innerHTML = `Category: ${data.results[0].category}`
    document.querySelector('#difficulty').innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector('#question').innerHTML = `Question: ${data.results[0].question}`
    document.querySelector('#answer1').innerHTML = `Option One: ${data.results[0].correct_answer}`
    document.querySelector('#answer2').innerHTML = `Option Two: ${data.results[0].incorrect_answers[0]}`
    document.querySelector('#answer3').innerHTML = `Option Three: ${data.results[0].incorrect_answers[1]}`
    document.querySelector('#answer4').innerHTML = `Option Four: ${data.results[0].incorrect_answers[2]}`
}


var game;

$('#answer1').click(async () => {
    alert("Correct. Next Player's Turn")
    //getApi()

    game = new Game();
    await game.fetchQuestions();
    game.useData();
})