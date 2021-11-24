document.getElementById('play').addEventListener('click', startGame);

function startGame() {
    let numberOfSquares = 0;

    const scelta = document.getElementById('scelta').value;
    if ( scelta === 'Easy' ){
        numberOfSquares = 100;
    }else if ( scelta === 'Medium' ){
        numberOfSquares = 81;
    }else{
        numberOfSquares = 49;
    }
   

    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    for(let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = [i];
        const newGeneratedSquare = generateGridItem(thisNumber);

        newGeneratedSquare.addEventListener('click', handleSquareClick);
        
        mainGrid.appendChild(newGeneratedSquare);

        if ( scelta === 'Easy' ){
            newGeneratedSquare.classList.add('easy');
        }else if ( scelta === 'Medium' ){
            newGeneratedSquare.classList.add('medium');
        }else{
            newGeneratedSquare.classList.add('hard');
        }

    }
}

function handleSquareClick() {
    this.classList.add('active');
}

function generateGridItem(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('cella');
    newSquare.innerHTML = `<span>${number}</span>`; 
    return newSquare;
}


function generateSquaresNumbers (quantityOfNumbers) {
    const numbersArray = [];
    while(numbersArray.length < quantityOfNumbers) {

        const randomNumber = getRndInteger(1, quantityOfNumbers);


        if( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }

    return numbersArray;
}