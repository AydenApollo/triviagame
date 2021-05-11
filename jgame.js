const beginButton = document.getElementById('startgame');
const playerOne = document.getElementById('playerone');
const playerTwo = document.getElementById('playertwo');

const getApiData = () => {
    axios.get('https://opentdb.com/api.php?amount=6&type=multiple')
    .then(response => {
        console.log(response)
    })
    .then(response => {
        playerOne.innerHTML = "Player One's Turn!!"
    })   
}

beginButton.addEventListener('click', getApiData)

