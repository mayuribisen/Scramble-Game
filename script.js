const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";

let sWords = ['python', 'javascript', 'c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];


const createNewWords = () => {
    let ranNum = Math.floor(Math.random()* sWords.length);

    let newTempSwords = sWords[ranNum];
    return newTempSwords;

}

const scrambleWords = (arr) => {
    for (let i= arr.length-1; i>0; i-- ){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));

        arr[i] = arr[j];
        arr[j] = temp ;

    }
    return arr;
}


btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords= scrambleWords(newWords.split("")).join("");
        msg.innerHTML = ` Guess the word:${randWords} `;

    }else {
        let tempWord = guess.value ;
        if(tempWord === newWords){
            play = false ;
            msg.innerHTML = `Awesome It's Correct. It is ${newWords} `;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";

        }else {
            msg.innerHTML = `Sorry! Its incorrect. Plz Try Again : ${randWords}`;
        }
    }
})