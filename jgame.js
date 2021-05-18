const category_api = document.getElementById('category');
const difficulty_api = document.getElementById('difficulty');
const question_api = document.getElementById('question');
const ansBtn1 = document.getElementById('answer1')
const ansBtn2 = document.getElementById('answer2')
const ansBtn3 = document.getElementById('answer3')
const ansBtn4 = document.getElementById('answer4')
const questionCounter = document.getElementById('questionCounter')
const currentPlayer = document.getElementById('playerTurn')
const playerOne = "Player One"
const playerTwo = "Player Two"



class Game {
    constructor() {
        this.questions = [];
        
    }
      async fetchQuestions() {
        await axios.get('https://opentdb.com/api.php?amount=4&type=multiple')
       .then(response => {
           console.log(response)
           this.questions = response.data.results
           console.log(this.questions.results)
           

       })
    }
    questionTracker() {
        let questInt = localStorage.getItem('counter')
        if (questInt == 0) {
            localStorage.setItem('counter', 0);
            //console.log(localStorage.getItem('counter'));
            //questionCounter.innerHTML = "Question " + localStorage.getItem('counter') + " of 4"
        }
        console.log(localStorage.getItem('counter'))
        questionCounter.innerHTML = "Question " + localStorage.getItem('counter') + " of 4"
    }

       useData() {
           this.questions.map(data => {
            category_api.innerHTML = `Category: ${data.category}` 
            difficulty_api.innerHTML = `Difficulty: ${data.difficulty}`
            question_api.innerHTML = `Question: ${data.question}`
            ansBtn1.innerHTML = `${data.correct_answer}`
            ansBtn2.innerHTML = `${data.incorrect_answers[0]}`
            ansBtn3.innerHTML = `${data.incorrect_answers[1]}`
            ansBtn4.innerHTML = `${data.incorrect_answers[2]}`
           })
       }
       
       
}

/*function questionTracker(){
    window.addEventListener("unload", function(){
      var count = parseInt(localStorage.getItem('counter') || 0);
      localStorage.setItem('counter', count++);
      console.log(count)
    }); 
    
  }*/
  let currentPosition;
$('#start').click(async () => {
    //questionCounter.innerHTML = "Question 1 of 4"
    let startGame = new Game();
    await startGame.fetchQuestions();
    startGame.useData()
    currentPlayer.innerHTML = `${playerOne}`
    startGame.questionTracker()    
})
$('#reload').click(async () => {
    //questionCounter.innerHTML = "Question 1 of 4"
    let startGame = new Game();
    await startGame.fetchQuestions();
    startGame.useData()
    currentPlayer.innerHTML = `${playerTwo}`
    
})
$('#answer1').click(async () => {
    let startGame = new Game();
    await startGame.fetchQuestions();
    startGame.useData() 
    startGame.questionTracker()
    if (currentPosition) {
        localStorage.setItem('counter', parseInt(localStorage.getItem('counter')) + 1)
    }
})
$('#answer2').click(async () => {
    let startGame = new Game();
    await startGame.fetchQuestions();
    startGame.useData() 
})
$('#answer3').click(async () => {
    let startGame = new Game();
    await startGame.fetchQuestions();
    startGame.useData() 
})
$('#answer4').click(async () => {
    let startGame = new Game();
    await startGame.fetchQuestions();
    startGame.useData() 
})

