// prendo l'id play e aggiunco l'evento click + la funzione startGame
document.getElementById('play').addEventListener('click', startGame);

// funzione che viene applicata una volta che il pulsante play è stato cliccato
function startGame() {
    // dichiaro una variabile a 0 per poi andarla ad incrementare a seconda della scelta dell'utente
    // numberOfSquares ---> Numero caselle
    //------------------------------------------------------
    let numberOfSquares = 0;

    const scelta = document.getElementById('scelta').value;
    if ( scelta === 'Easy' ){
        numberOfSquares = 100;
    }else if ( scelta === 'Medium' ){
        numberOfSquares = 81;
    }else{
        numberOfSquares = 49;
    }
    //------------------------------------------------------

    // vado a creare una constante mainGrid con la griglia html all'interno di essa
    // con il mainGrid.innerHTML = ''; vado a cancellare la vecchia griglia ogni volta che l'utente clicca su play
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



    //utilizzo una funzione che vada a generare le 16 bombe
    const bombs = 16;
    let maxNumber = 0;
        if ( scelta === 'Easy' ){
            maxNumber = 100;
        }else if ( scelta === 'Medium' ){
            maxNumber = 81;
        }else{
            maxNumber = 49;
        }

    function getRndInteger(min, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - min) ) + min;
    }
    console.log(getRndInteger(1, bombs + 1));

    function generationBombs(bombs){
        let myBombs = [];
        for( let i = 0; i < bombs; i++ ){
            let el = getRndInteger(1, maxNumber + 1);
            
            myBombs.push(el);
            console.log(el);

        }
        console.log(myBombs);
        return myBombs;
    }
    myBombs = generationBombs(bombs);
}
// vado a creare una funzione che una volta cliccato sulla casella andrà ad aggiungere la classe
// active dal css
function handleSquareClick() {
    this.classList.add('active');
}

// vado a creare una funzione che crea nell'html il tag <div> </div> 
// dopo di che vado ad inserire all'interno del div le varie informazioni che mi servono.
//------------------------------------------------------
function generateGridItem(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('cella');
    newSquare.innerHTML = `<span>${number}</span>`; 
    return newSquare;
}
//------------------------------------------------------
