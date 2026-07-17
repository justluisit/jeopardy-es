import { loadClues } from "../services/DataService.js";
import { renderBoard } from "../views/BoardView.js";
import { GAME_CONFIG, TOTAL_CLUES } from "../config.js";
import { initializeModal, initializeEvaluation, getSelectedPlayerId } from "../views/ModalView.js";
import { disableClue, setBoardEnabled } from "../views/BoardView.js";
import { getPlayerNames, generatePlayerInputs, 
        hidePlayerSetup } from "../views/PlayerSetupView.js";
import { initializeLeaderboard, showLeaderboard, closeLeaderboard } from "../views/LeaderboardView.js"; 

let game = null;

export async function startGame(){

    try{

        game = await loadClues();

        renderBoard(
            game.categories,
            handleClueSelected
        );

        document.title = GAME_CONFIG.gameName;
        document.getElementById("subtitle").textContent =
            "Versión MVP v0.2.0";

        document.querySelector("h1").textContent =
            GAME_CONFIG.gameName;

        document
            .getElementById("show-answer")
            .addEventListener("click", showAnswer);

        document
            .getElementById("close-modal")
            .addEventListener("click", closeModal);

        initializeModal(handleClueClosed);

        initializeEvaluation(
            handleCorrectAnswer,
            handleIncorrectAnswer
        );

        initializeLeaderboard(handleContinueLeaderboard);

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
    showClue,
    closeModal,
    populatePlayers
} from "../views/ModalView.js";

/*function handleClueSelected(clue){

    const selected = findClue(
        game.categories,
        clue.category,
        clue.value
    );

    if (selected) {

        showClue(selected);

    }

}*/

function handleClueSelected(clue) {

    if(game.isClueUsed(clue.id)){
        return;
    }

    game.setCurrentClue(clue);

    populatePlayers(game.players);

    showClue(clue);

}

function handleClueClosed(){

    if(!game.currentClue){
        return;
    }

    game.markClueAsUsed(
        game.currentClue.id
    );

    disableClue(
        game.currentClue.id
    );

    game.currentClue = null;

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

    game.markClueAsUsed(
        game.currentClue.id
    );

    disableClue(
        game.currentClue.id
    );

    game.currentClue = null;

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

        game.currentClue.value,

        isCorrect

    );

    game.markClueAsUsed(
        game.currentClue.id
    );

    disableClue(
        game.currentClue.id
    );

    closeModal();

    game.currentClue = null;

    if(game.shouldShowLeaderboard()){

        const isFinalFlag = game.answeredClues >= TOTAL_CLUES;

        showLeaderboard({
            players: game.getLeaderboard(),
            answeredClues: game.answeredClues,
            totalClues: TOTAL_CLUES,
            isFinal: isFinalFlag
        });

        return;

    }



}

function handleContinueLeaderboard(){

    closeLeaderboard();

}

