import { loadQuestions } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";
import { GAME_CONFIG } from "../config.js";
import { initializeModal, initializeEvaluation, getSelectedPlayerId } from "../views/ModalView.js";
import { disableQuestion, setBoardEnabled } from "../views/BoardView.js";
import { getPlayerNames, generatePlayerInputs, 
        hidePlayerSetup } from "../views/PlayerSetupView.js";

let game = null;

export async function startGame(){

    try{

        game = await loadQuestions();

        renderBoard(
            game.categories,
            handleQuestionSelected
        );

        document.title = GAME_CONFIG.gameName;
        document.getElementById("subtitle").textContent =
            "Versión MVP v0.1.0";

        document.querySelector("h1").textContent =
            GAME_CONFIG.gameName;

        document
            .getElementById("show-answer")
            .addEventListener("click", showAnswer);

        document
            .getElementById("close-modal")
            .addEventListener("click", closeModal);

        initializeModal(handleQuestionClosed);

        initializeEvaluation(
            handleCorrectAnswer,
            handleIncorrectAnswer
        );
        
        generatePlayerInputs(3);

        document
            .getElementById("player-count")
            .addEventListener("change", event=>{

                generatePlayerInputs(
                    Number(event.target.value)
                );

            });

        setBoardEnabled(false);

        document
        .getElementById("start-game")
        .addEventListener(
            "click",
            handleStartGame
        );
        

    }
    catch(error){

        console.error(error);

    }

}

import {
    showAnswer,
    showQuestion,
    closeModal,
    populatePlayers
} from "../views/ModalView.js";

/*function handleQuestionSelected(question){

    const selected = findQuestion(
        game.categories,
        question.category,
        question.value
    );

    if (selected) {

        showQuestion(selected);

    }

}*/

function handleQuestionSelected(question) {

    if(game.isQuestionUsed(question.id)){
        return;
    }

    game.setCurrentQuestion(question);

    populatePlayers(game.players);

    showQuestion(question);

}

function handleQuestionClosed(){

    if(!game.currentQuestion){
        return;
    }

    game.markQuestionAsUsed(
        game.currentQuestion.id
    );

    disableQuestion(
        game.currentQuestion.id
    );

    game.currentQuestion = null;

}

function handleStartGame(){

    const names=getPlayerNames();

    game.createPlayers(names);

    game.startGame();

    hidePlayerSetup();

    setBoardEnabled(true);

    console.log(game.players);

}

function handleSaveResult(){

    closeModal();

    game.markQuestionAsUsed(
        game.currentQuestion.id
    );

    disableQuestion(
        game.currentQuestion.id
    );

    game.currentQuestion = null;

}

function handleCorrectAnswer(){

    processAnswer(true);

}

function handleIncorrectAnswer(){
    processAnswer(false);
}

function processAnswer(isCorrect){

    const playerId = getSelectedPlayerId();

    if(playerId===null){

        alert(
            "Seleccione un jugador."
        );

        return;

    }

    game.recordAnswer(

        playerId,

        game.currentQuestion.value,

        isCorrect

    );

    game.markQuestionAsUsed(
        game.currentQuestion.id
    );

    disableQuestion(
        game.currentQuestion.id
    );

    closeModal();

    game.currentQuestion = null;

}

